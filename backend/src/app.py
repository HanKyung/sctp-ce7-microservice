from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///friends.db"
app.config['SQLALCHEMy_TRACK_MODIFICATIONS'] = False
# create db instance
db = SQLAlchemy(app)

import routes

with app.app_context():
    db.create_all()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
