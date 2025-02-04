from flask import Flask, request, jsonify, Response
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
import json
from sqlalchemy import and_, or_

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///items.sqlite3"
db = SQLAlchemy(app)

class GroceryItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    quantity = db.Column(db.Integer)
    cost = db.Column(db.Float)

    def __init__(self, name, quantity, cost):
        self.name = name
        self.quantity = quantity
        self.cost = cost

@app.before_request
def before_req():
    headers = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' } 
    if request.method == 'OPTIONS' or request.method == 'options': 
        return jsonify(headers), 200

@app.route("/get-items", methods=['GET'])
@cross_origin()
def get_items():
    all_items = GroceryItem.query.all()
    items_list = []
    for i in all_items:
        items_list.append({"name": i.name, "quantity": i.quantity, "cost": i.cost})
    resp = Response(response=json.dumps({"items": items_list}))
    resp.headers['Access-Control-Allow-Origin'] = "*"
    return resp
    #return {"items": items_list}

@app.route("/search-items", methods=['POST'])
@cross_origin()
def search_items():
    # order: name, quantity cost
    # request data = { name: "", quantity: ``, cost: ``}
    search_query = json.loads(request.data)
    query = GroceryItem.query.all()
    all_items = []
    #all_items = GroceryItem.query.filter(GroceryItem.name.like(namefilter), GroceryItem.quantity == quantityfilter, GroceryItem.cost == costfilter).all()
 
    result_list = []
    for s in query:
        if search_query['name'] == "none" or search_query['name'] in s.name:
            if search_query['quantity'] == -1 or s.quantity == search_query['quantity']:
                if search_query['cost'] == -1 or s.cost == search_query['cost']:
                    result_list.append({"name":s.name, "quantity": s.quantity, "cost": s.cost})

    return {"items": result_list}

@app.route("/add-item", methods=['POST'])
@cross_origin()
def add_item():
    resp = json.loads(request.data)
    newitem = GroceryItem(resp['name'], resp['quantity'], resp['cost'])
    db.session.add(newitem)
    db.session.commit()
    return "response received"

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
