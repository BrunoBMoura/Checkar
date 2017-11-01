<<<<<<< HEAD
from flask import Flask, jsonify, request
import requests
from sinesp_client import SinespClient
import urllib.request
import json
import base64

app = Flask(__name__)

@app.route('/image', methods=['POST'])
def task():
	image = request.form['img']
	url = 'https://api.openalpr.com/v2/recognize?secret_key=sk_8a9400a18bac3bdf3355275c&recognize_vehicle=0&country=br&return_image=0&topn=10'
	files = {'image': base64.b64decode(image)}
	response = requests.post(url, files=files)
	json_data = json.loads(response.text)
	return(jsonify({'plate':json_data['results'][0]['plate']}))

# run the app.
if __name__ == "__main__":
    app.debug = True
=======
from flask import Flask, jsonify, request
import requests
from sinesp_client import SinespClient
import urllib.request
import json
import base64

app = Flask(__name__)

@app.route('/image', methods=['POST'])
def task():
	image = request.form['img']
	url = 'https://api.openalpr.com/v2/recognize?secret_key=sk_8a9400a18bac3bdf3355275c&recognize_vehicle=0&country=br&return_image=0&topn=10'
	files = {'image': base64.b64decode(image)}
	response = requests.post(url, files=files)
	json_data = json.loads(response.text)
	return(jsonify({'plate':json_data['results'][0]['plate']}))

# run the app.
if __name__ == "__main__":
    app.debug = True
>>>>>>> 1816dc8f0db01e8c21eecadf771ee750e3a8d071
    app.run(host='0.0.0.0')