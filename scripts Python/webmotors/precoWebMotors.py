import requests
import urllib.request
import re
import difflib
from os import *
from bs4 import BeautifulSoup	
from unidecode import *
import re
from selenium import webdriver #mandar um <npm -g install phantomjs-prebuilt> para funcionar
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
	#print(url)
	try:
		html = requests.get(url)
		text = html.text
		soup = BeautifulSoup(text, "html5lib")
		x = soup.find('a', {'data-link':'click-abrir-anuncio'})
		#print(x['href'])
		if len(x)>0:
			try:
				driver = webdriver.PhantomJS()
				driver.get(x['href'])
				html = driver.page_source
				driver.close()
				soup = BeautifulSoup(html,"html5lib")
				y = soup.find("div",{'class':'dis-tc col-5 last size-default'})
				separador1=y.text.find("Médio") #acha a palavra medio
				separador1+=10 #pula até o numero
				separador2=y.text.find(",",separador1) #corta a casa decimal
				precoMedio=y.text[separador1:separador2]
				return precoMedio
			except urllib.error.HTTPError:
				pass
	except urllib.error.HTTPError:
		pass
marca = "bmw/m5"
anoModelo = "2014"
print ("Preco médio é R$ "+ info_webMotors(marca, anoModelo)+",00")