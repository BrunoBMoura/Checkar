from flask import Flask, jsonify
from sinesp_client import SinespClient
import urllib.request
import json
import difflib

from hashlib import sha1
from hmac import new as hmac
from xml.etree import ElementTree
import math
import os
import random
import requests
import uuid
import datetime

import re
from bs4 import BeautifulSoup
from unidecode import *

URL = 'sinespcidadao.sinesp.gov.br'
SECRET = 'XvAmRTGhQchFwzwduKYK'


class RequestTimeout(Exception):
    pass

class InvalidResponse(Exception):
    pass

class SinespClient(object):

    def __init__(self, proxy_address=None, proxy_port=None):

        self._proxies = None
        if proxy_address and proxy_port:
            self._proxies = {"https": "https://%s:%s" % (
                proxy_address, proxy_port)}

        body_file = open(os.path.join(os.path.dirname(__file__), 'body.xml'))
        self._body_template = body_file.read()
        body_file.close()


    def _token(self, plate):
        plate_and_secret = '%s%s' % (plate, SECRET)
        plate_and_secret = bytes(plate_and_secret.encode('utf-8'))
        plate = plate.encode('utf-8')
        hmac_key = hmac(plate_and_secret, plate, sha1)
        return hmac_key.hexdigest()


    def _rand_coordinate(self, radius=2000):
        seed = radius/111000.0 * math.sqrt(random.random())
        seed = seed * math.sin(2 * 3.141592654 * random.random())
        return seed

    def _rand_latitude(self):
        return '%.7f' % (self._rand_coordinate() - 38.5290245)


    def _rand_longitude(self):
        return '%.7f' % (self._rand_coordinate() - 3.7506985)

    def _uuid(self):
        return str(uuid.uuid4())

    def _date(self):
        return datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')


    def _body(self, plate):
        token = self._token(plate)
        latitude = self._rand_latitude()
        longitude = self._rand_longitude()
        uuid = self._uuid()
        date = self._date()
        return self._body_template % (latitude, token, uuid, longitude, date, plate)

    def _captcha_cookie(self):
        cookies = requests.get('https://sinespcidadao.sinesp.gov.br/sinesp-cidadao/captchaMobile.png', proxies=self._proxies, verify=False).cookies
        jsessionid = cookies.get('JSESSIONID')
        return {'JSESSIONID': jsessionid}

    def _request(self, plate):
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
        response = self._request(plate).content
        if not response:
            return dict()
        return self._parse(response)

# EB looks for an 'application' callable by default.
application = Flask(__name__)

def info_cnw(marca, anoModelo):
	separador = marca.find("/")
	fabricante = marca[0:separador]
	if marca.find(" ") > 0:
		fim = marca.find(" ")
	else:
		fim = len(marca)
	modelo = marca[separador+1:fim]
	ano = anoModelo
	carro = marca.replace("/", " ")
	r = {}

	url = "http://www.carrosnaweb.com.br/catalogo.asp?anoini=" + ano + "&anofim=" + ano + "&valfim=100000000&config=0&combustivel=0&cambio=0&proced=0&fabricante=" + fabricante + "&porte=0&varnome=" + modelo + "&portas=&ordem=1&passageiros=0"
	print(url)
	try:
		html = requests.get(url)
		text = html.text
		soup = BeautifulSoup(text, "html5lib")
		x = soup.findAll(href=re.compile("fichadetalhe"))
		if len(x) > 0:
			y = x[1::2]
			title = []
			href = []
			for a in y:
				title.append(a['title'].replace(u'\xa0', u' '))
				href.append(a['href'])
			closeMatch = difflib.get_close_matches(carro,title, 1, 0.1)[0]
			endereco = "http://www.carrosnaweb.com.br/" + href[title.index(closeMatch)]
			print("Modelo: " + closeMatch)
			print("Link: " + endereco)

			try:
				html = requests.get(endereco)
				text = html.text
				soup = BeautifulSoup(text, "html5lib")
				x = soup.findAll('a', rel='example_group')
				foto = "http://www.carrosnaweb.com.br/"+x[0]['href']
				# for a in x:
				# 	print("http://www.carrosnaweb.com.br/" + a['href'])
				return({'preco': soup.find('td', string = 'Ano').parent.findAll('a')[1].text, 'foto': foto}) #preço
			except urllib.error.HTTPError:
				pass
		else:
			return info_cnw(marca, str(int(anoModelo)-1))
	except urllib.error.HTTPError:
		pass

@application.route('/<string:placa>', methods=['GET'])
def get_task(placa):
	sc = SinespClient(proxy_address='177.159.238.114', proxy_port=3128)
	result = sc.search(placa)

	response = urllib.request.urlopen("http://fipeapi.appspot.com/api/1/carros/marcas.json")
	data = json.loads(response.read().decode())

	marca = result['brand']
	anoModelo = result['model_year']
	if 'VW' in marca:
		marca = marca.replace('VW', 'VOLKSWAGEN')
	elif 'GM' in marca:
		marca = marca.replace('GM', 'CHEVROLET')
	elif 'BMW M' in marca:
		marca = marca.replace('BMW M', 'BMW ')
	if 'I/' in marca:
		marca = marca.replace('I/', '', 1).replace(' ', '/', 1)
	result['brand'] = marca
	consulta = info_cnw(marca, anoModelo)
	result['preco'] = consulta['preco']
	result['foto'] = consulta['foto']
	return jsonify(result)

# run the app.
if __name__ == "__main__":
	application.debug = True
	application.run()