import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const ServiceMenu = () => {
	const { store, actions } = useContext(Context);

	const [newVehicle, setnewVehicle] = useState("");

	const [newService, setnewService] = useState("");

	const [newZipCode, setnewZipCode] = useState("");

	return (
		<div className="container p-4 text-center text-light fs-6 mt-3">
			<h1 className="text-center my-5">Request Help</h1>
			<div className="list-group text-start shadow">
				<label className="list-group-item d-flex align-items-center m-0">
					<select
						id="inputState"
						className="form-select my-1 shadow-sm"
						name="vehicle"
						onChange={e => setnewVehicle(e.target.value)}>
						<option selected>Choose Your Vehicle</option>
						{store.listOfVehicles.length > 0
							? store.listOfVehicles.map((item, index) => {
									return (
										<option key={index}>
											{item.vehicle_type} {item.vehicle_make} {item.vehicle_model}{" "}
											{item.vehicle_year} {item.vehicle_color} {item.vehicle_plate}
										</option>
									);
							  })
							: "Loading..."}
					</select>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="my-2 form-control shadow-sm"
						type="text"
						placeholder="Zip Code"
						name="zip_code"
						onChange={e => setnewZipCode(e.target.value)}
					/>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2 shadow-sm"
						type="checkbox"
						value="Flat Tire"
						name="service"
						onChange={e => setnewService(newService + e.target.value + ", ")}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Flat Tire: $40</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2 shadow-sm"
						type="checkbox"
						value="Dead Battery"
						name="service"
						onChange={e => setnewService(newService + e.target.value + ", ")}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Dead Battery: $150</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2 shadow-sm"
						type="checkbox"
						value="Empty Gas"
						name="service"
						onChange={e => setnewService(newService + e.target.value + ", ")}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Empty Gas: $30</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2 shadow-sm"
						type="checkbox"
						value="Jump Start"
						name="service"
						onChange={e => setnewService(newService + e.target.value + ", ")}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Jump Start: $50</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input
						className="form-check-input m-2 shadow-sm"
						type="checkbox"
						value="Towing Car"
						name="service"
						onChange={e => setnewService(newService + e.target.value + ", ")}
					/>
					<h6 className="me-2 m-0 d-flex align-items-center">Towing Car: $150</h6>
				</label>
			</div>
			<Link to="/ClientHomePage">
				<button
					className="btn btn-warning btn-lg m-3"
					onClick={() => {
						actions.addRequest(newVehicle, newService, newZipCode);
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
