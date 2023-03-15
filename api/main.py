from flask import Flask
from flask_cors import CORS
import sqlite3


app = Flask(__name__)
CORS(app)

conn = sqlite3.connect("tracts.gpkg")



@app.route("/tracts")
def list_tracts():
    return {
        "objects": [],
    }


@app.route("/tracts/<int:pk>")
def get_tract(pk):
    return {
        "pk": pk,
    }
