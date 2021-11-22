import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const RequestsList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container pt-5 text-center">
			<h1 className="mb-4">Requests List</h1>

			<ul className="list-group position-relative">
				{store.listOfRequests.map((item, index) => {
					return (
						<li className="list-group-item d-inline-flex align-items-center" key={index}>
							<p className="mx-2 text-start">
								<strong>Full Name:</strong> <br /> {item.fullName}
							</p>
							<p className="mx-2 text-start">
								<strong>Zip Code:</strong> <br /> {item.zipCode}
							</p>
							<p className="mx-2 text-start">
								<strong>Vehicle:</strong> <br /> {item.vehicle}
							</p>
							<p className="mx-2 text-start">
								<strong>Service:</strong>
								{item.service.map((service, index) => (
									<li key={index}>{service}</li>
								))}
							</p>

							<div
								className="btn-group position-absolute top-25 end-0 me-5"
								role="group"
								aria-label="Basic mixed styles example">
								<Link to="/TruckerMessages" className="btn btn-warning">
									Accept
								</Link>
							</div>

							<p className="mx-2 text-start" />
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
