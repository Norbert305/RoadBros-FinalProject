"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Vehicle, Request
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

#First GET method, Done
@api.route('/user', methods=['GET'])
def get_user():

    return "This is the GET method"

#-------------------------
#Missing a login action FOR LATER
#--------------------------

#Adding a new user
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

#Adding a new vehicle, Done
@api.route('/vehicle', methods=['POST'])
def add_vehicle():

    body = request.get_json()

    new_vehicle = Vehicle(
        user_id=body["user_id"],
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

#Client creating a new request
@api.route('/request', methods=['POST'])
def add_request():

    body = request.get_json()

    new_request = Request(
        user_id=body["user_id"],
        zip_code=body["zip_code"], 
        service=body["service"], 
        trucker_id="None Assigned",
        completed="Not completed"
    )

    db.session.add(new_request)
    db.session.commit()

    requests_query = Request.query.all()
    all_requests = list(map(lambda x: x.serialize(), requests_query))
    return jsonify(all_requests), 200

#List of all requests for Truckers' Requests List
@api.route('/request', methods=['GET'])
def get_requests():
    
    requests_query = Request.query.all()
    all_requests = list(map(lambda x: x.serialize(), requests_query))

    return jsonify({
        "requests" : all_requests
    }), 200

#List of vehicles, needs to show only vehicles of certain users
@api.route('/vehicle/user/<user_id>', methods=['GET'])
def get_vehicles(user_id):

    vehicles_query = Vehicle.query.filter_by(user_id=user_id)
    all_vehicles = list(map(lambda x: x.serialize(), vehicles_query))

    return jsonify({
        "vehicles" : all_vehicles
    }), 200

#Trucker accepting request
@api.route('/request/<id>', methods=['PUT'])
def accept_request(id):

    body = request.get_json()
    
    request = Request.query.get(id)

    request.trucker_id = body["trucker_id"]

    db.session.commit()

    request_query = Request.query.get(id)

    if request_query.trucker_id == body["trucker_id"]:
        return "Request Accepted", 200
    return "Update Failed"

#Completed Requests
@api.route('/request/<id>', methods=['PUT'])
def complete_request(id):

    body = request.get_json()
    
    request = Request.query.get(id)

    request.completed = "Completed"

    db.session.commit()

    request_query = Request.query.get(id)

    if request_query.completed == "Completed":
        return "Request Completed", 200
    return "Update Failed"

#Delete vehicle
@api.route('/vehicle/<id>', methods=['DELETE'])
def delete_request(id):

    body = request.get_json()
    
    vehicle =  Vehicle.query.get(id)

    db.session.delete(vehicle)
    db.session.commit()

    vehicles_query = Vehicle.query.all()
    all_vehicles = list(map(lambda x: x.serialize(), vehicles_query))
    return jsonify(all_vehicles), 200

#Completed requests for Trucker Service History
#@api.route('/completed_request', methods=['GET'])
#def get_completed_requests():
    
#    completed_requests_query = Request.query.filter_by(completed=True)
#    all_completed_requests = list(map(lambda x: x.serialize(), completed_requests_query))

#    return jsonify({
#        "requests" : all_completed_requests
##    }), 200

#Completed requests for User Service Hisotry, FIX HERE!!
#@api.route('/completed_request', methods=['GET'])
#def get_completed_requests():

#    body = request.get_json()
    
#    completed_requests_query = Request.query.filter_by(completed=True, user_id=body["user_id"])
#    all_completed_requests = list(map(lambda x: x.serialize(), completed_requests_query))

#    return jsonify({
#        "requests" : all_completed_requests
#    }), 200

#Questions
#Do I need a table or endpoint for messages or payment information?
#Missing client rating method