import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const VehiclesList = () => {
	const { store, actions } = useContext(Context);
	console.log(store.listOfVehicles);
	return (
		<div className="container text-center text-light">
			<h1 className="text-center my-5">Vehicles List</h1>
			<ul className="list-group position-relative">
				{store.listOfVehicles.length > 0
					? store.listOfVehicles.map((item, index) => {
							return (
								<li className="list-group-item d-flex flex-column mx-1 mb-2" key={index}>
									<p className="mx-2 m-1 text-start">
										<strong>Type:</strong> {item.vehicle_type}
									</p>
									<p className="mx-2 m-1 text-start">
										<strong>Make:</strong> {item.vehicle_make}
									</p>
									<p className="mx-2 m-1 text-start">
										<strong>Model:</strong> {item.vehicle_model}
									</p>
									<p className="mx-2 m-1 text-start">
										<strong>Year:</strong> {item.vehicle_year}
									</p>
									<p className="mx-2 m-1 text-start">
										<strong>Color:</strong> {item.vehicle_color}
									</p>
									<p className="mx-2 m-1 text-start">
										<strong>Plate Number:</strong> {item.vehicle_plate}
									</p>
									<p className="text-center">
										<button
											type="button"
											className="btn btn-danger mx-2  m-1 px-1"
											onClick={() => actions.deleteVehicle(item)}>
											Remove
										</button>
									</p>
								</li>
							);
					  })
					: "Loading..."}
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
