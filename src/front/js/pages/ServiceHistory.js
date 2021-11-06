import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ServiceHistory = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<h1 className="text-center mt-5 mb-4">Service History Page</h1>
			<ul className="list-group">
				{store.listOfRequests.map((item, index) => {
					return (
						<li className="list-group-item d-inline-flex align-items-center" key={index}>
							<p className="mx-2 text-start">
								<strong>Trucker Name:</strong> <br /> {item.fullName}
							</p>
							<p className="mx-2 text-start">
								<strong>Type:</strong> <br /> {item.vehicleType}
							</p>
							<p className="mx-2 text-start">
								<strong>Make:</strong> <br /> {item.vehicleMake}
							</p>
							<p className="mx-2 text-start">
								<strong>Model:</strong> <br /> {item.vehicleModel}
							</p>
							<p className="mx-2 text-start">
								<strong>Year:</strong> <br /> {item.vehicleYear}
							</p>
							<p className="mx-2 text-start">
								<strong>Service:</strong> <br /> Service Name: $$
							</p>
							<p className="mx-2 text-start">
								<strong>Date:</strong> <br /> TimeStamp
							</p>
						</li>
					);
				})}
			</ul>
			<Link to="/ClientHomePage">
				<button className="btn btn-primary m-3">Back to Home</button>
			</Link>
		</div>
	);
};
