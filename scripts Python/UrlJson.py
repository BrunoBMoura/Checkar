import urllib2
import simplejson
import difflib
from sinesp_client import SinespClient
sc = SinespClient()
result = sc.search('eyv6986') #pega as infos do carro com essa placa
print result
# ---------------Achando a marca
response = urllib2.urlopen("http://fipeapi.appspot.com/api/1/carros/marcas.json") #busca todas as marcas de carrO
data = simplejson.load(response)
#print (data[1]['name'])

marcaCarro = ( result['brand'][ 0:(result['brand'].find("/")) ] ).upper() #separa a marca do nome do carro
idMarca =-1
for percorredor in data: #percorre vetor data atras da id da marca do carro
	if str(percorredor['name']) == marcaCarro:
		idMarca = percorredor['id']
		print "Achou " + str(idMarca) 
		break

#----------------Achando o modelo
response = urllib2.urlopen("http://fipeapi.appspot.com/api/1/carros/veiculos/"+str(idMarca)+".json") #busca todos os modelos daquela marca
data = simplejson.load(response)
listaModelos = []
listaIdModelos = []
for percorredor in data: #criando lista de modelos daquela marca
	listaModelos.append(((percorredor['name']).encode('utf-8')).upper())
	listaIdModelos.append(int(percorredor['id']))

modeloCarro = ( result['brand'][(result['brand'].find("/"))+1:] ).upper()#separa o nome da marca do carro
closeMatches = difflib.get_close_matches(modeloCarro,listaModelos,3,0.3)
indexListaIdModeloCarro = listaModelos.index(closeMatches[0])
print (str(closeMatches[0]) + " " + str(listaIdModelos[indexListaIdModeloCarro]))
#---------------Pegando Modelo-Ano
response = urllib2.urlopen("http://fipeapi.appspot.com/api/1/carros/veiculo/"+str(idMarca)+"/"+str(listaIdModelos[indexListaIdModeloCarro])+".json") #busca todos os modelos daquela marca
data = simplejson.load(response)
anoPlaca = result['model_year']
for percorredor in data:
	anoFipe = percorredor["fipe_codigo"][0:(percorredor["fipe_codigo"].find("-"))]
	if anoFipe == anoPlaca:
		print "Achou Modelo-Ano"
		break

#--------------Pegand valor do carro
response = urllib2.urlopen("http://fipeapi.appspot.com/api/1/carros/veiculo/"+str(idMarca)+"/"+str(listaIdModelos[indexListaIdModeloCarro])+"/"+percorredor["fipe_codigo"]+".json") #busca todos os modelos daquela marca
data = simplejson.load(response)
print data["preco"]
