import urllib.request
import simplejson
import difflib
from sinesp_client import SinespClient

placa = input()
sc = SinespClient()
result = sc.search(placa)
# ---------------Achando a marca
response = urllib.request.urlopen("http://fipeapi.appspot.com/api/1/carros/marcas.json") #busca todas as marcas de carrO
data = simplejson.load(response)
marcaCarro = (result['brand'][0:(result['brand'].find("/")) ] ).upper() #separa a marca do nome do carro
idMarca =-1

for percorredor in data: #percorre vetor data atras da id da marca do carro
    if str(percorredor['name']) == marcaCarro:
	    idMarca = percorredor['id']
	    break

print(idMarca)

#----------------Achando o modelo
response = urllib.request.urlopen("http://fipeapi.appspot.com/api/1/carros/veiculos/"+str(idMarca)+".json") #busca todos os modelos daquela marca
data = simplejson.load(response)
listaModelos = []
listaIdModelos = []

for percorredor in data: #criando lista de modelos daquela marca
    print(percorredor['name'])
    listaModelos.append((percorredor['name']).upper())
    listaIdModelos.append(int(percorredor['id']))
    modeloCarro = ( result['brand'][(result['brand'].find("/"))+1:] ).upper()#separa o nome da marca do carro
closeMatches = difflib.get_close_matches(modeloCarro,listaModelos, cutoff=0)

indexListaIdModeloCarro = listaModelos.index(closeMatches[0])

#---------------Pegando Modelo-Ano
response = urllib.request.urlopen("http://fipeapi.appspot.com/api/1/carros/veiculo/"+str(idMarca)+"/"+str(listaIdModelos[indexListaIdModeloCarro])+".json") #busca todos os modelos daquela marca
data = simplejson.load(response)
anoPlaca = result['model_year']
for percorredor in data:
	anoFipe = percorredor["fipe_codigo"][0:(percorredor["fipe_codigo"].find("-"))]
	if anoFipe == anoPlaca:
		break

#--------------Pegand valor do carro
response = urllib.request.urlopen("http://fipeapi.appspot.com/api/1/carros/veiculo/"+str(idMarca)+"/"+str(listaIdModelos[indexListaIdModeloCarro])+"/"+percorredor["fipe_codigo"]+".json") #busca todos os modelos daquela marca
data = simplejson.load(response)
