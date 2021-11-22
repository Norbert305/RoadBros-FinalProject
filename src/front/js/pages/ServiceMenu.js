import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ServiceMenu = () => {
	const { store, actions } = useContext(Context);

	const [newVehicle, setnewVehicle] = useState("");

	const [newService, setnewService] = useState([]);

	const [newZipCode, setnewZipCode] = useState("");

	return (
		<div className="container pt-5 text-center">
			<h1 className="text-center mt-5 mb-4">Request Help</h1>
			<div className="list-group text-start">
				<label className="list-group-item d-flex align-items-center m-0">
					<select
						id="inputState"
						className="form-select my-1"
						name="vehicle"
						onChange={e => setnewVehicle(e.target.value)}>
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
						className="my-2 form-control"
						type="text"
						placeholder="Zip Code"
						name="zip code"
						onChange={e => setnewZipCode(e.target.value)}
					/>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2"
						type="checkbox"
						value="Flat Tire: $40"
						name="service"
						onChange={e => setnewService([...newService, e.target.value])}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Flat Tire: $40</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2"
						type="checkbox"
						value="Dead Battery: $150"
						name="service"
						onChange={e => setnewService([...newService, e.target.value])}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Dead Battery: $150</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2"
						type="checkbox"
						value="Empty Gas: $30"
						name="service"
						onChange={e => setnewService([...newService, e.target.value])}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Empty Gas: $30</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2"
						type="checkbox"
						value="Jump Start: $50"
						name="service"
						onChange={e => setnewService([...newService, e.target.value])}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Jump Start: $50</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2"
						type="checkbox"
						value="Towing Car: $150"
						name="service"
						onChange={e => setnewService([...newService, e.target.value])}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Towing Car: $150</h6>
				</label>
			</div>
			<Link to="/AwaitingResponse">
				<button
					className="btn btn-warning btn-lg m-3"
					onClick={() => {
						actions.addRequest({
							fullName: store.loggedUser.fullName,
							service: newService,
							vehicle: newVehicle,
							zipCode: newZipCode
						});
					}}>
					Send Request
				</button>
			</Link>
			<Link to="/ClientHomePage">
				<button className="btn btn-warning btn-lg m-3">Home</button>
			</Link>
		</div>
	);
};
