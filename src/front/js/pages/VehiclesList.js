import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const VehiclesList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container p-4 text-center text-light fs-6">
			<h1 className="text-center m-3">Vehicles List</h1>
			<ul className="list-group position-relative">
				{store.listOfVehicles.map((item, index) => {
					return (
						<li className="list-group-item d-flex flex-column p-3" key={index}>
							<p className="mx-2 m-1 text-start">
								<strong>Type:</strong> {item.vehicleType}
							</p>
							<p className="mx-2 m-1 text-start">
								<strong>Make:</strong> {item.vehicleMake}
							</p>
							<p className="mx-2 m-1 text-start">
								<strong>Model:</strong> {item.vehicleModel}
							</p>
							<p className="mx-2 m-1 text-start">
								<strong>Year:</strong> {item.vehicleYear}
							</p>
							<p className="mx-2 m-1 text-start">
								<strong>Color:</strong> {item.vehicleColor}
							</p>
							<p className="mx-2 m-1 text-start">
								<strong>Plate Number:</strong> {item.vehiclePlate}
							</p>
							<p className="mx-2 m-1 text-center">
								<button
									type="button"
									className="btn btn-danger mx-2 m-1 px-1"
									onClick={() => actions.deleteVehicle(item)}>
									Remove Vehicle
								</button>
							</p>
						</li>
					);
				})}
			</ul>
			<Link to="/AddVehicles">
				<button className="btn btn-warning btn-lg p-2 m-3">Add Vehicles</button>
			</Link>
			<Link to="/ClientHomePage">
				<button className="btn btn-warning btn-lg p-2 m-3">Home</button>
			</Link>
		</div>
	);
};
