import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ClientHomePage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container py-4 px-3 text-center text-light fs-4">
			<h1 className="text-center m-3">Home Page</h1>

			<h2 className="text-center m-3">Hi, Welcome back</h2>

			<Link to="/ServiceMenu">
				<button className="btn btn-warning btn-lg p-2 m-3">Request Help</button>
			</Link>
			<Link to="/ServiceHistory">
				<button className="btn btn-warning btn-lg m-3">Service History</button>
			</Link>
			<div className="container p-4 text-center text-light fs-6">
				<h3> Lastest Service</h3>
				<ul className="list-group position-relative">
					{store.listOfRequests.map((item, index) => {
						return (
							<li
								className="list-group-item d-flex flex-column mx-1 mb-1 rounded-3 border-2 border-warning"
								key={index}>
								<p className="mx-2 m-1 text-start">
									<strong>Vehicle:</strong> {item.vehicleType} {item.vehicleMake} {item.vehicleModel}{" "}
									{item.vehicleYear}
								</p>
								<p className="mx-2 m-0 text-start">
									<strong>Service:</strong> {item.service}
								</p>
								<p className="mx-2 m-1 text-start">
									<strong>Date:</strong> TimeStamp
								</p>
							</li>
						);
					})}
				</ul>
			</div>
			<Link to="/VehiclesList">
				<button className="btn btn-warning btn-lg p-2 m-3">Vehicles List</button>
			</Link>
			<div className="container p-4 text-center text-light fs-6">
				<ul className="list-group position-relative">
					{store.listOfVehicles.map((item, index) => {
						return (
							<li
								className="list-group-item d-flex flex-column mx-1 mb-1 rounded-3 border-2 border-warning"
								key={index}>
								<p className="mx-2 m-1 text-start">
									<strong>Make:</strong> {item.vehicleMake}
								</p>
								<p className="mx-2 m-1 text-start">
									<strong>Model:</strong> {item.vehicleModel}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
