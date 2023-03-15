from flask import Flask
import sqlite3


app = Flask(__name__)

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
