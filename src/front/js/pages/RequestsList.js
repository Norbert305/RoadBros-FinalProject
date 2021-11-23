import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const RequestsList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container pt-5 px-3 text-center">
			<h1 className="text-center p-2">Requests List</h1>

			<ul className="list-group position-relative">
				{store.listOfRequests.map((item, index) => {
					return (
						<li className="list-group-item d-flex flex-column p-3" key={index}>
							<p className="mx-2 m-1 text-start">
								<strong>Full Name:</strong> {item.fullName}
							</p>
							<p className="mx-2 m-1 text-start">
								<strong>Zip Code:</strong> {item.zipCode}
							</p>
							<p className="mx-2 m-1 text-start">
								<strong>Vehicle:</strong> {item.vehicle}
							</p>
							<p className="mx-2 m-1 mb-3 text-start">
								<strong>Service:</strong>
								{item.service.map((service, index) => (
									<li key={index}>{service}</li>
								))}
							</p>
							<Link to="/TruckerMessages">
								<button className="btn btn-success mx-2 px-3">Accept</button>
							</Link>
						</li>
					);
				})}
			</ul>

			<Link to="/TruckerHomePage">
				<button className="btn btn-warning btn-lg px-5 m-3">Home</button>
			</Link>
		</div>
	);
};

/*<button
	type="button"
	lassName="btn btn-danger"
	onClick={() => actions.deleteRequest(item)}>
	Remove
	</button>*/
