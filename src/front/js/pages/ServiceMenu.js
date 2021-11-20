import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ServiceMenu = () => {
	const { store, actions } = useContext(Context);

	const [newRequest, setnewRequest] = useState({
		vehicle: null,
		service: null
	});

	const handleChange = e => setnewRequest({ ...newRequest, [e.target.name]: e.target.value });

	return (
		<div className="container pt-5 text-center">
			<h1 className="text-center mt-5 mb-4">Service Menu Page</h1>
			<div className="list-group text-start">
				<label className="list-group-item d-flex align-items-center m-0">
					<select id="inputState" className="form-select my-1" name="vehicle" onChange={handleChange}>
						<option selected>Choose Your Vehicle</option>
						{store.listOfVehicles.map((item, index) => {
							return (
								<option key={index}>
									{" "}
									{item.vehicleType} {item.vehicleMake} {item.vehicleModel} {item.vehicleYear}
								</option>
							);
						})}
					</select>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="m-2"
						type="textarea"
						placeholder="Zip Code"
						name="zip code"
						onChange={handleChange}
					/>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2"
						type="checkbox"
						value="Flat Tire: $40"
						name="service"
						onChange={handleChange}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Flat Tire: $40</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2"
						type="checkbox"
						value="Dead Battery: $150"
						name="service"
						onChange={handleChange}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Dead Battery: $150</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2"
						type="checkbox"
						value="Empty Gas: $30"
						name="service"
						onChange={handleChange}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Empty Gas: $30</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2"
						type="checkbox"
						value="Jump Start: $50"
						name="service"
						onChange={handleChange}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Jump Start: $50</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2"
						type="checkbox"
						value="Towing Car: $150"
						name="service"
						onChange={handleChange}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Towing Car: $150</h6>
				</label>
			</div>
			<Link to="/AwaitingResponse">
				<button
					className="btn btn-warning btn-lg m-3"
					/*
					onClick={() => {
						actions.addRequest(newRequest);
					}}
					*/
				>
					Send Request
				</button>
			</Link>
			<Link to="/ClientHomePage">
				<button className="btn btn-warning btn-lg m-3">Home</button>
			</Link>
		</div>
	);
};
