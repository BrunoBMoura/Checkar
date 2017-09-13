import requests
import urllib.request
import re
import difflib
from os import *
from bs4 import BeautifulSoup	
from unidecode import *


#funcao para pegar informacoes de um carro no site carrosnaweb.com.br
def info_webMotors(marca, anoModelo):
	separador = marca.find("/")
	fabricante = marca[0:separador]
	if marca.find(" ") > 0:
		fim = marca.find(" ")
	else:
		fim = len(marca)
	modelo = marca[separador+1:fim]
	ano = anoModelo

	url = "https://www.webmotors.com.br/carros/estoque/"+fabricante+"/"+modelo+"/de."+ano+"/ate."+ano
	print(url)
	try:
		html = requests.get(url)
		text = html.text
		soup = BeautifulSoup(text, "html5lib")
		#x = soup.select("table tr td table tr td a")
		x = soup.find('a', {'data-link':'click-abrir-anuncio'})
		print(x['href'])
		if len(x)>0:
			try:
				html = requests.get(x['href'])
				txt = html.text
				soup = BeautifulSoup(text,"html5lib")
				y = soup.find("div")
				print y
			except urllib.error.HTTPError:
				pass
	except urllib.error.HTTPError:
		pass
#marca = "FORD/ESCORT 1.8 XR3"
#anoModelo = "1990"
marca = "Volkswagen/spacefox trend"
anoModelo = "2014"
info_webMotors(marca, anoModelo)