<<<<<<< HEAD
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
from bs4 import BeautifulSoup, Comment
from unidecode import *

# EB looks for an 'application' callable by default.
app = Flask(__name__)

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
                foto = "http://www.carrosnaweb.com.br/"+x[0]['href'].replace('\\', '/')
                # for a in x:
                #   print("http://www.carrosnaweb.com.br/" + a['href'])

                r = {'preco': soup.find('td', string = 'Ano').parent.findAll('a')[1].text, 'foto': foto}

                codigo = re.findall(r'\d+', endereco)[0]
                endereco2 = "http://www.carrosnaweb.com.br/preco.asp?codigo=" + codigo
                print("Link historico de precos: " + endereco2)
                try:
                    html2 = requests.get(endereco2)
                    text2 = html2.text
                    soup = BeautifulSoup(text2, "html5lib")
                    comments = soup.findAll(text=lambda text:isinstance(text, Comment))
                    [comment.extract() for comment in comments]
                    x = soup.findAll(src=re.compile('mainbar'))
                    l1 = [a.parent.text for a in x if not '%' in a.parent.text]
                    l2 = [a.parent.parent.previous_sibling.previous_sibling.text for a in x if not '%' in a.parent.text]
                    print(l1)
                    print(l2)
                    precos_str = [a.replace("\xa0", "") for a in l1]
                    anos = [int(a.replace("\xa0R$ ", "").replace('.', '')) for a in l2]
                    precos = [a.replace("R$ ", "").replace('.', '') for a in precos_str]
                    print(anos) #array com os anos para o gráfico
                    print(precos) #array com os preços para o gráfico
                    r['precos'] = precos
                    r['anos'] = anos
                    return(r) #preço
                except urllib.error.HTTPError:
                    pass
            except urllib.error.HTTPError:
                pass
        else:
            return info_cnw(marca, str(int(anoModelo)-1))
    except urllib.error.HTTPError:
        pass

@app.route('/placa/<string:placa>', methods=['GET'])
def get_task(placa):
    sc = SinespClient()
    result = sc.search(placa)

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
    result['precos'] = consulta['precos']
    result['anos'] = consulta['anos']
    return jsonify(result)

@app.route('/image', methods=['POST'])
def task():
    image = request.form['img']
    url = 'https://api.openalpr.com/v2/recognize?secret_key=sk_8a9400a18bac3bdf3355275c&recognize_vehicle=0&country=br&return_image=0&topn=10'
    files = {'image': base64.b64decode(image)}
    response = requests.post(url, files=files)
    json_data = json.loads(response.text)
    return(jsonify({'plate':json_data['results'][0]['plate']}))

if __name__ == "__main__":
    app.debug = True
=======
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
from bs4 import BeautifulSoup, Comment
from unidecode import *

# EB looks for an 'application' callable by default.
app = Flask(__name__)

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
                foto = "http://www.carrosnaweb.com.br/"+x[0]['href'].replace('\\', '/')
                # for a in x:
                #   print("http://www.carrosnaweb.com.br/" + a['href'])

                r = {'preco': soup.find('td', string = 'Ano').parent.findAll('a')[1].text, 'foto': foto}

                codigo = re.findall(r'\d+', endereco)[0]
                endereco2 = "http://www.carrosnaweb.com.br/preco.asp?codigo=" + codigo
                print("Link historico de precos: " + endereco2)
                try:
                    html2 = requests.get(endereco2)
                    text2 = html2.text
                    soup = BeautifulSoup(text2, "html5lib")
                    comments = soup.findAll(text=lambda text:isinstance(text, Comment))
                    [comment.extract() for comment in comments]
                    x = soup.findAll(src=re.compile('mainbar'))
                    l1 = [a.parent.text for a in x if not '%' in a.parent.text]
                    l2 = [a.parent.parent.previous_sibling.previous_sibling.text for a in x if not '%' in a.parent.text]
                    print(l1)
                    print(l2)
                    precos_str = [a.replace("\xa0", "") for a in l1]
                    anos = [int(a.replace("\xa0R$ ", "").replace('.', '')) for a in l2]
                    precos = [a.replace("R$ ", "").replace('.', '') for a in precos_str]
                    print(anos) #array com os anos para o gráfico
                    print(precos) #array com os preços para o gráfico
                    r['precos'] = precos
                    r['anos'] = anos
                    return(r) #preço
                except urllib.error.HTTPError:
                    pass
            except urllib.error.HTTPError:
                pass
        else:
            return info_cnw(marca, str(int(anoModelo)-1))
    except urllib.error.HTTPError:
        pass

@app.route('/placa/<string:placa>', methods=['GET'])
def get_task(placa):
    sc = SinespClient()
    result = sc.search(placa)

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
    result['precos'] = consulta['precos']
    result['anos'] = consulta['anos']
    return jsonify(result)

@app.route('/image', methods=['POST'])
def task():
    image = request.form['img']
    url = 'https://api.openalpr.com/v2/recognize?secret_key=sk_8a9400a18bac3bdf3355275c&recognize_vehicle=0&country=br&return_image=0&topn=10'
    files = {'image': base64.b64decode(image)}
    response = requests.post(url, files=files)
    json_data = json.loads(response.text)
    return(jsonify({'plate':json_data['results'][0]['plate']}))

if __name__ == "__main__":
    app.debug = True
>>>>>>> 8255d8a9d984c6403c6543969322e2875472d7c0
    app.run(host='0.0.0.0')