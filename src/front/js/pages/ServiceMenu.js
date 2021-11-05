import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ServiceMenu = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<h1 className="text-center mt-5 mb-4">Service Menu Page</h1>
			<div className="list-group text-start">
				<label className="list-group-item d-flex align-items-center m-0">
					<select id="inputState" className="form-select my-1">
						<option selected>Choose Your Vehicle</option>
						<option>Car</option>
						<option>Motorcycle</option>
						<option>Truck</option>
					</select>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input className="form-check-input m-2" type="checkbox" value="" />
					<h6 className="me-2 m-0 d-flex align-items-center">Flat Tire: $40</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input className="form-check-input m-2" type="checkbox" value="" />
					<h6 className="me-2 m-0 d-flex align-items-center">Dead Battery: $150</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input className="form-check-input m-2" type="checkbox" value="" />
					<h6 className="me-2 m-0 d-flex align-items-center">Empty Gas: $30</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input className="form-check-input m-2" type="checkbox" value="" />
					<h6 className="me-2 m-0 d-flex align-items-center">Jump Start: $50</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input className="form-check-input m-2" type="checkbox" value="" />
					<h6 className="me-2 m-0 d-flex align-items-center">Towing Car: $150</h6>
				</label>
			</div>
			<Link to="/AwaitingResponse">
				<button className="btn btn-primary m-3">Request Help</button>
			</Link>
		</div>
	);
};
