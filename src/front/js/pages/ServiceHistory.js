import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ServiceHistory = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container pt-5 text-center">
			<h1 className="text-center mt-4 p-5">Service History</h1>
			<ul className="list-group">
				{store.listOfRequests.map((item, index) => {
					return (
						<li className="list-group-item d-inline-flex align-items-center" key={index}>
							<p className="mx-2 text-start">
								<strong>Trucker Name:</strong> <br /> {item.fullName}
							</p>
							<p className="mx-2 text-start">
								<strong>Vehicle:</strong> <br /> {item.vehicleType} {item.vehicleMake}{" "}
								{item.vehicleModel} {item.vehicleYear}
							</p>
							<p className="mx-2 text-start">
								<strong>Service:</strong> <br /> {item.service}
							</p>
							<p className="mx-2 text-start">
								<strong>Date:</strong> <br /> TimeStamp
							</p>
						</li>
					);
				})}
			</ul>
			<Link to="/ClientHomePage">
				<button className="btn btn-warning btn-lg m-3">Home</button>
			</Link>
		</div>
	);
};
