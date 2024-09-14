from app import app, db
from flask import request, jsonify
from models import Friend


# Get all friends
@app.route("/api/friends",methods=["GET"])
def get_friends():
    friends = Friend.query.all()
    result = [friend.to_json() for friend in friends]
    return jsonify(result)

