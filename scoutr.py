import os
from flask import Flask, render_template
from flask.ext.mongoengine import MongoEngine
from models import MenuItem, Location
from mongokit import Connection, Document

app = Flask(__name__)

# Database setup
app.config["MONGODB_SETTINGS"] = {
   'DB': 'scoutrdb',
   'host': 'ds035310.mongolab.com',
   'port': 35310,
   'username': 'scoutrapp',
   'password': 'ScoutRPass4'}

app.config["SECRET_KEY"] = '\xc8\x1e9\xec\xe1\x01\x87\x9d\xba\x88Zm\x11s\x10\xff\xc4M\xefH\xbd\x02\xf9\xc5'

db = MongoEngine(app)

@app.route('/')
def hello(name=None):
    return render_template('index.html', name=name)

@app.route('/makedummy')
def make_dummy():
   pass

@app.route('/getmenu/<menu_item>')


def get_dummy(menu_item):
   if not menu_item:
      raise ValueError()
   menu_items = MenuItem.objects(item_id=menu_item)
   return render_template('index.html', menu_items=menu_items)

if __name__ == '__main__':
   app.debug = True
   app.run()