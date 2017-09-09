import requests
import urllib.request
import re
import difflib
from os import *
from bs4 import BeautifulSoup
from unidecode import *

#funcao para pegar informacoes de um carro no site carrosnaweb.com.br
def info_cnw(marca, anoModelo):
	separador = marca.find("/")
	fabricante = marca[0:separador]
	modelo = marca[separador+1:marca.find(" ")]
	ano = anoModelo
	carro = marca.replace("/", " ")

	#url = "http://www.carrosnaweb.com.br/avancada.asp"
	url = "http://www.carrosnaweb.com.br/catalogo.asp?anoini=" + ano + "&anofim=" + ano + "&valfim=100000000&config=0&combustivel=0&cambio=0&proced=0&fabricante=" + fabricante + "&porte=0&varnome=" + modelo + "&portas=&ordem=1&passageiros=0"
	#url = "http://www.carrosnaweb.com.br/catalogo.asp?anoini=1990&anofim=1990&valfim=100000000&config=0&combustivel=0&cambio=0&proced=0&fabricante=FORD&porte=0&varnome=ESCORT&portas=&ordem=1&passageiros=0"
	print(url)
	try:
		html = requests.get(url)
		text = html.text
		soup = BeautifulSoup(text, "html5lib")
		#x = soup.select("table tr td table tr td a")
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
				x = soup.findAll(href=re.compile(modelo.lower()))
				for a in x:
					print("http://www.carrosnaweb.com.br/" + a['href'])
				print(soup.find('td', string = 'Ano').parent.findAll('a')[1].text) #preço
			except urllib.error.HTTPError:
				pass
		else:
			info_cnw(marca, str(int(anoModelo)-1))
	except urllib.error.HTTPError:
		pass
#marca = "FORD/ESCORT 1.8 XR3"
#anoModelo = "1990"
marca = "Volkswagen/spacefox trend"
anoModelo = "2014"
info_cnw(marca, anoModelo)