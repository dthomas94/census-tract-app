from flask import Flask
from flask_cors import CORS
import sqlite3


app = Flask(__name__)
CORS(app)

conn = sqlite3.connect("tracts.gpkg", check_same_thread=False)
cur = conn.cursor()


class CursorByName():
    def __init__(self, cursor):
        self._cursor = cursor
    
    def __iter__(self):
        return self

    def __next__(self):
        row = self._cursor.__next__()

        return { description[0]: row[col] for col, description in enumerate(self._cursor.description) }


@app.route("/tracts")
def list_tracts():
    res = cur.execute("SELECT fid,NAMELSAD,COUNTYFP FROM tracts")
    result = []
    for row in CursorByName(res):
        result.append(row)

    return {
        "tracts": result ,
    }


@app.route("/tracts/<int:pk>")
def get_tract(pk):
    return {
        "pk": pk,
    }
