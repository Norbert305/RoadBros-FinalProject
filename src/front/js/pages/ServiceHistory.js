import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ServiceHistory = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container p-4 text-center text-light fs-6">
			<h1 className="text-center my-5">Service History</h1>
			<ul className="list-group position-relative">
				{store.listOfRequests.map((item, index) => {
					return (
						<li
							className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3"
							key={index}>
							<p className="mx-2 m-1 text-start">
								<strong>Trucker Name:</strong> {item.fullName}
							</p>
							<p className="mx-2 m-1 text-start">
								<strong>Vehicle:</strong> {item.vehicleType} {item.vehicleMake} {item.vehicleModel}{" "}
								{item.vehicleYear}
							</p>
							<p className="mx-2 m-1 text-start">
								<strong>Service:</strong> {item.service}
							</p>
							<p className="mx-2 m-1 text-start">
								<strong>Date:</strong> TimeStamp
							</p>
						</li>
					);
				})}
			</ul>
			<Link to="/ClientHomePage">
				<button className="btn btn-warning btn-lg p-2 m-3">Home</button>
			</Link>
		</div>
	);
};
