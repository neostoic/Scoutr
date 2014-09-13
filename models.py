from flask import url_for
from scoutr import db
import datetime

class MenuItem(db.Document):
    item_id = db.IntField()
    store = db.StringField(max_length=255, required=True)
    item_descr = db.StringField(max_length=255, required=True)
    loc = db.EmbeddedDocumentField(Location)

class Location(db.EmbeddedDocument):
    loc_descr = db.StringField(max_length=511)
    loc_zip = db.IntField()

