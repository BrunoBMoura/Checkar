from flask import Flask, jsonify
import json
import difflib
from sinesp_client import SinespClient
import requests
import urllib.request
from hashlib import sha1
from hmac import new as hmac
from xml.etree import ElementTree
import math
import os
import random
import requests
import uuid
import datetime


app = Flask(__name__)


URL = 'sinespcidadao.sinesp.gov.br'
SECRET = 'XvAmRTGhQchFwzwduKYK'


class RequestTimeout(Exception):
    pass

class InvalidResponse(Exception):
    pass

class SinespClient(object):
    """
    This makes possible to consult SINESP Cidadão database without needing
    to authenticate or fill captcha tests.

    SINESP Cidadão is a Brazilian public database of national vehicles. It's
    very useful to identify suspicious and stolen cars or motorcycles.

    We don't know why but government does not maintain a public API for this
    service. The only way to access this information is to access the SINESP
    site and answer captchas for every request. Hopefully they provide Android
    and iOS applications that make it possible to search for vehicles without
    needing to complete captcha tests. We have then reverse engineered their
    Android app APK file and discovered how to get our data without dealing
    with boring captchas.
    """
    def __init__(self, proxy_address=None, proxy_port=None):
        """
        SINESP only accepts national web requests. If you don't have a valid
        Brazilian IP address you could use a web proxy (SOCKS5).
        """
        self._proxies = None
        if proxy_address and proxy_port:
            self._proxies = {"https": "https://%s:%s" % (
                proxy_address, proxy_port)}

        # Read and store XML template for our HTTP request body.
        body_file = open(os.path.join(os.path.dirname(__file__), 'body.xml'))
        self._body_template = body_file.read()
        body_file.close()


    def _token(self, plate):
        """Generates SHA1 token as HEX based on specified and secret key."""
        plate_and_secret = '%s%s' % (plate, SECRET)
        plate_and_secret = bytes(plate_and_secret.encode('utf-8'))
        plate = plate.encode('utf-8')
        hmac_key = hmac(plate_and_secret, plate, sha1)
        return hmac_key.hexdigest()


    def _rand_coordinate(self, radius=2000):
        """Generates random seed for latitude and longitude coordinates."""
        seed = radius/111000.0 * math.sqrt(random.random())
        seed = seed * math.sin(2 * 3.141592654 * random.random())
        return seed


    def _rand_latitude(self):
        """Generates random latitude."""
        return '%.7f' % (self._rand_coordinate() - 38.5290245)


    def _rand_longitude(self):
        """Generates random longitude."""
        return '%.7f' % (self._rand_coordinate() - 3.7506985)

    def _uuid(self):
        """Generates an RFC4122 Class 4 random UUID"""
        return str(uuid.uuid4())

    def _date(self):
        """Returns the current date formatted as yyyy-MM-dd HH:mm:ss"""
        return datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')


    def _body(self, plate):
        """Populate XML request body with specific data."""
        token = self._token(plate)
        latitude = self._rand_latitude()
        longitude = self._rand_longitude()
        uuid = self._uuid()
        date = self._date()
        return self._body_template % (latitude, token, uuid, longitude, date, plate)

    def _captcha_cookie(self):
        """Performs a captcha request and return the cookie."""
        cookies = requests.get('https://sinespcidadao.sinesp.gov.br/sinesp-cidadao/captchaMobile.png', proxies=self._proxies, verify=False).cookies
        jsessionid = cookies.get('JSESSIONID')
        return {'JSESSIONID': jsessionid}


    def _request(self, plate):
        """Performs an HTTP request with a given content."""
        url = ('https://sinespcidadao.sinesp.gov.br/sinesp-cidadao/'
               'mobile/consultar-placa/v2')
        data = self._body(plate)
        cookies = self._captcha_cookie()
        headers = {
            'Accept': 'text/plain, */*; q=0.01',
            'Cache-Control': 'no-cache',
            'Content-Length': '661',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Host': 'sinespcidadao.sinesp.gov.br',
            'User-Agent': 'SinespCidadao / 3.0.2.1 CFNetwork / 758.2.8 Darwin / 15.0.0',
            'Connection':'close',
        }
        return requests.post(url, data, headers, proxies=self._proxies, cookies=cookies, verify=False)


    def _parse(self, response):
        """Parses XML result from HTTP response."""
        body_tag = '{http://schemas.xmlsoap.org/soap/envelope/}Body'
        response_tag = ('{http://soap.ws.placa.service.sinesp.serpro.gov.br/}'
                        'getStatusResponse')
        return_tag = 'return'

        try:
            xml = response.decode('latin-1').encode('utf-8')
            xml = ElementTree.fromstring(xml)
            elements = xml.find(body_tag).find(response_tag).find(return_tag)
        except:
            raise InvalidResponse('Could not parse request response.')

        elements = dict(((element.tag, element.text) for element in elements))

        elements = dict(
            return_code=elements.get('codigoRetorno'),
            return_message=elements.get('mensagemRetorno'),
            status_code=elements.get('codigoSituacao'),
            status_message=elements.get('situacao'),
            chassis=elements.get('chassi'),
            model=elements.get('modelo'),
            brand=elements.get('marca'),
            color=elements.get('cor'),
            year=elements.get('ano'),
            model_year=elements.get('anoModelo'),
            plate=elements.get('placa'),
            date=elements.get('data'),
            city=elements.get('municipio'),
            state=elements.get('uf'),
        )

        return elements


    def search(self, plate):
        """
        Searchs for vehicle plate.

        If a vehicle with the specified plate was found, the server returns the
        followign information which we'll repass in a dictionary format:

        - return_code
        - return_message
        - status_code
        - status_message
        - chassis
        - model
        - brand
        - color
        - year
        - model_year
        - plate
        - date
        - city
        - state
        """
        response = self._request(plate).content
        if not response:
            return dict()

        return self._parse(response)

@app.route('/<string:placa>', methods=['GET'])
def get_task(placa):
	sc = SinespClient(proxy_address='179.127.33.5', proxy_port=53281)
	result = sc.search(placa)

	response = urllib.request.urlopen("http://fipeapi.appspot.com/api/1/carros/marcas.json")
	data = json.loads(response.read().decode())
	# print(result)
	marcaCarro = result['brand']

	if 'VW' in marcaCarro:
		marcaCarro='VOLKSWAGEN'
	idMarca =-1

	brandList = {}
	for instance in data:
		brandList[instance['name']] = instance['id']

	# print(brandList)
	closeBrand = difflib.get_close_matches(marcaCarro, brandList.keys(), 1, 0.1)
	brand = closeBrand[0]
	idMarca = brandList[brand]

	#----------------Achando o modelo
	response = urllib.request.urlopen("http://fipeapi.appspot.com/api/1/carros/veiculos/"+str(idMarca)+".json") #busca todos os modelos daquela marca
	data = json.load(response)
	
	listaModelos = {}
	for instance2 in data: #criando lista de modelos daquela marca
		listaModelos[instance2['name']] = instance2['id']

	# print(listaModelos)
	modeloCarro = result['brand'].upper()
	
	if brand in modeloCarro:
		modeloCarro = modeloCarro.replace(brand, '')
	elif 'VW' in modeloCarro:
		modeloCarro = modeloCarro.replace('VW', '')
	
	# print(modeloCarro)
	closeMatches = difflib.get_close_matches(modeloCarro,listaModelos.keys(), 1, 0.1)
	# print(closeMatches)

	IDcarro = listaModelos[closeMatches[0]]

	#---------------Pegando Modelo-Ano
	response = urllib.request.urlopen("http://fipeapi.appspot.com/api/1/carros/veiculo/"+str(idMarca)+"/"+str(IDcarro)+".json") #busca todos os modelos daquela marca
	data = json.loads(response.read().decode())
	anoPlaca = result['model_year']
	for percorredor in data:
		anoFipe = percorredor["fipe_codigo"][0:(percorredor["fipe_codigo"].find("-"))]
		if anoFipe == anoPlaca:
			break

	#--------------Pegand valor do carro
	response = urllib.request.urlopen("http://fipeapi.appspot.com/api/1/carros/veiculo/"+str(idMarca)+"/"+str(IDcarro)+"/"+percorredor["fipe_codigo"]+".json") #busca todos os modelos daquela marca
	data = json.loads(response.read().decode())
	result['preco'] = data['preco']
	return jsonify(result)

if __name__ == '__main__':
	port = int(os.environ.get("PORT", 5000))
	app.run(debug=True, port=port)