"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Vehicle, Request
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

#First get method
@api.route('/user', methods=['GET'])
def get_user():

    return "This is the GET method"

#Missing a login action

#Adding new users
@api.route('/user', methods=['POST'])
def add_new_user():

    body = request.get_json()

    new_user = User(
        user_type=body["user_type"], 
        full_name=body["full_name"], 
        email=body["email"], 
        password=body["password"], 
        phone=body["phone"]
    )

    db.session.add(new_user)
    db.session.commit()

    users_query = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users_query))
    return jsonify(all_users), 200

#Adding new vehicles
@api.route('/vehicle', methods=['POST'])
def add_vehicle():

    body = request.get_json()

    new_vehicle = Vehicle(
        vehicle_type=body["vehicle_type"], 
        vehicle_model=body["vehicle_model"], 
        vehicle_make=body["vehicle_make"], 
        vehicle_year=body["vehicle_year"], 
        vehicle_color=body["vehicle_color"],
        vehicle_plate=body["vehicle_plate"]
    )

    db.session.add(new_vehicle)
    db.session.commit()

    vehicles_query = Vehicle.query.all()
    all_vehicles = list(map(lambda x: x.serialize(), vehicles_query))
    return jsonify(all_vehicles), 200

#List of Requests of every trucker
@api.route('/request', methods=['POST'])
def add_request():

    body = request.get_json()

    new_request = Request(
        zip_code=body["zip_code"], 
        service=body["service"], 
        trucker_id=body["trucker_id"]
    )

    db.session.add(new_request)
    db.session.commit()

    requests_query = Request.query.all()
    all_requests = list(map(lambda x: x.serialize(), requests_query))
    return jsonify(all_requests), 200

#List of vehicles, different for every user
@api.route('/vehicle', methods=['GET'])
def get_vehicles():
    #How to get vehicles for one user .filter_by(user_id=user_id) for list of user vehicles
    vehicles_query = Vehicle.query.all()
    all_vehicles = list(map(lambda x: x.serialize(), vehicles_query))

    return jsonify({
        "vehicles" : all_vehicles
    }), 200

#List of requests (completed), for service history purposes (for client and trucker alike)
@api.route('/request', methods=['GET'])
def get_requests():
    #How to get requests for one user .filter_by(user_id=user_id) for service history (user and trucker)
    requests_query = Request.query.all()
    all_requests = list(map(lambda x: x.serialize(), requests_query))

    return jsonify({
        "requests" : all_requests
    }), 200

#Do I need a table or endpoint for messages or payment information?
#Missing client rating method