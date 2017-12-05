from flask import Flask, render_template, request, json, jsonify
from flask_pymongo import PyMongo

import os

import datetime

app = Flask(__name__)

app.config['MONGO_HOST'] = os.getenv('MONGO_HOST', 'localhost') # dev localhost, prod docker

mongo = PyMongo(app)

@app.route('/')
def spa():
    return render_template('index.html')

@app.route('/tabs')
def tabs():
    return render_template('tabs.html')

@app.route('/time')
def server_time():
    return datetime.datetime.now().isoformat()

@app.route('/users', methods=['GET'])
def users():
    users = [ doc['login'] for doc in mongo.db.users.find() ]
    users.sort( key=lambda x: x[1:] )
    return jsonify( users )

@app.route('/eval', methods=['POST'])
def eval():
    return jsonify( request.get_json() )

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
