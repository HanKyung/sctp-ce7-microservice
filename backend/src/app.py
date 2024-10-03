from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///friends.db"
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password@db/friends'
app.config['SQLALCHEMy_TRACK_MODIFICATIONS'] = False
# create db instance
db = SQLAlchemy(app)

import routes

with app.app_context():
    db.create_all()

test_response = [{'id': 1, 'name': 'Best Friend'}]
@app.route("/test")
def send_test_response():
    return jsonify(test_response)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
