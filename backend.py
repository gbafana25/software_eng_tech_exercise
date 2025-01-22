from flask import Flask, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import json

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

@app.route("/get-items", methods=['GET'])
def get_items():
    all_items = GroceryItem.query.all()
    items_list = []
    for i in all_items:
        items_list.append({"name": i.name, "quantity": i.quantity, "cost": i.cost})
    return {"items": items_list}

@app.route("/search-items", methods=['POST'])
def search_items():
    # order: name, quantity cost
    # request data = { search_filters: [], search_strings: []}
    search_query = json.loads(request.data)
    # TODO: loop over items and apply filters
    all_items = GroceryItem.query.all()
    result_list = []
    for i in all_items:
        if i.name == search_query['search_strings'][0]:
            result_list.append({"name":i.name, "quantity": i.quantity, "cost": i.cost})
    if len(result_list) == 0:
        return "No matches found"
    else:
        return {"results": result_list}

@app.route("/add-item", methods=['POST'])
def add_item():
    resp = json.loads(request.data)
    newitem = GroceryItem(resp['name'], resp['quantity'], resp['cost'])
    db.session.add(newitem)
    db.session.commit()
    return "response received"

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run()
