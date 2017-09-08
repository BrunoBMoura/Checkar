from flask import Flask, jsonify
import urllib.request
import json
import difflib
from sinesp_client import SinespClient

app = Flask(__name__)

@app.route('/<string:placa>', methods=['GET'])
def get_task(placa):
	
	sc = SinespClient()
	result = sc.search(placa)

	response = urllib.request.urlopen("http://fipeapi.appspot.com/api/1/carros/marcas.json")
	data = json.loads(response.read().decode())
	print(result)
	marcaCarro = result['brand']

	if 'VW' in marcaCarro:
		marcaCarro='VOLKSWAGEN'
	idMarca =-1

	brandList = {}
	for instance in data:
		brandList[instance['name']] = instance['id']

	print(brandList)
	closeBrand = difflib.get_close_matches(marcaCarro, brandList.keys(), 1, 0.1)
	brand = closeBrand[0]
	idMarca = brandList[brand]

	#----------------Achando o modelo
	response = urllib.request.urlopen("http://fipeapi.appspot.com/api/1/carros/veiculos/"+str(idMarca)+".json") #busca todos os modelos daquela marca
	data = json.loads(response.read().decode())
	
	listaModelos = {}
	for instance2 in data: #criando lista de modelos daquela marca
		listaModelos[instance2['name']] = instance2['id']

	print(listaModelos)
	modeloCarro = result['brand'].upper()
	
	if brand in modeloCarro:
		modeloCarro = modeloCarro.replace(brand, '')
	elif 'VW' in modeloCarro:
		modeloCarro = modeloCarro.replace('VW', '')
	
	# print(modeloCarro)
	closeMatches = difflib.get_close_matches(modeloCarro,listaModelos.keys(), 1, 0.1)
	print(closeMatches)

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
    app.run(debug=True)
