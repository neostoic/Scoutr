import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello(name=None):
    return render_template('index.html', name=name)

@app.route('/info/')
def info_collect():
    return render_template('info.html')

if __name__ == '__main__':
    app.debug = True
    app.run()