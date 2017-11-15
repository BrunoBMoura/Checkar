#pip install PyMySQL

import pymysql.cursors

def insertCheck(placa, modelo, marca, bairro, cidade, estado,lat,lng,data):
	# Connect to the database
	connection = pymysql.connect(host='localhost',
							 user='root',
							 password='123',
							 db='teste',
							 charset='utf8mb4',
							 cursorclass=pymysql.cursors.DictCursor)
	try:
		with connection.cursor() as cursor:
			# Create a new record
			sql = "INSERT INTO `CheckPos` (`placa`, `modelo`, `marca`, `bairro`, `cidade`, `estado`, `lat`, `lng`, `data`) VALUES (%s, %s,%s,%s,%s,%s,%s,%s,%s)"
			cursor.execute(sql,(placa, modelo, marca, bairro, cidade, estado,lat,lng,data)) 
		
		# connection is not autocommit by default. So you must commit to save
		# your changes.
		connection.commit()
	finally:
		connection.close()

def select(query):
	connection = pymysql.connect(host='localhost',
							 user='root',
							 password='123',
							 db='teste',
							 charset='utf8mb4',
							 cursorclass=pymysql.cursors.DictCursor)
	try:
		with connection.cursor() as cursor:
			#select
			sql = query
			cursor.execute(sql)
			result = cursor.fetchone()
			print(result)
	finally:
		connection.close()

#para a funcao eh soh passar os parametros que quer inserir
#insertCheck('BBB1236', 'GOL','VW','Santana','SJC','SP','12334342','-49954135','2017-11-15')
#select("select * from CheckPos")