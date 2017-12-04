from flask import Flask, render_template, request, json, jsonify

import os

import datetime

app = Flask(__name__)

@app.route('/')
def spa():
    return render_template('index.html')

@app.route('/eval', methods=['POST'])
def eval():
    return jsonify('ok')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
