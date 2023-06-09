from flask import Flask
from flask_cors import CORS
import sqlite3
from google import decode


app = Flask(__name__)
# frontend runs on localhost and not the exact ip, so this allows sending requests from the FE
CORS(app)

# resolves issue of sqlite3 throwing an error about objects being created/used in differing threads
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
    res = cur.execute("SELECT fid,NAMELSAD,COUNTYFP,INTPTLAT,INTPTLON FROM tracts")
    result = []
    for row in CursorByName(res):
        result.append(row)
    
    

    return {
        "tracts": result ,
    }


@app.route("/tracts/<int:pk>")
def get_tract(pk):
    res = cur.execute("SELECT * FROM tracts WHERE fid=?", (pk,))
    result = None
    for row in CursorByName(res):
        row['geom'] = decode(row['geom'].decode('latin1'))
        result = row

    return result