import os
import oauth2 as oauth
from flask import Flask, render_template

app = Flask(__name__)

# Database setup
app.config["MONGODB_SETTINGS"] = {
   'DB': 'scoutrdb',
   'host': 'ds035310.mongolab.com',
   'port': 35310,
   'username': 'scoutrapp',
   'password': 'ScoutRPass4'}

app.config["SECRET_KEY"] = '\xc8\x1e9\xec\xe1\x01\x87\x9d\xba\x88Zm\x11s\x10\xff\xc4M\xefH\xbd\x02\xf9\xc5'

@app.route('/')
def welcome():
  return render_template('splash.html')

@app.route('/dashboard/')
def dashboard(name=None):
    return render_template('index.html', name=name)

@app.route('/info/')
def info_collect():
    return render_template('info.html')

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
