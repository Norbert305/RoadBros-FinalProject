import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const RequestsList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container pt-5 text-center">
			<h1 className="mb-4">Client Requests Page</h1>

			<ul className="list-group position-relative">
				{store.listOfRequests.map((item, index) => {
					return (
						<li className="list-group-item d-inline-flex align-items-center" key={index}>
							<img
								src={item.picture}
								className="img-fluid m-0 overflow-hidden h-50"
								width="10%"
								height="5%"
								alt="..."
							/>
							<p className="mx-2 text-start">
								<strong>Name:</strong> <br /> {item.fullName}
							</p>
							<p className="mx-2 text-start">
								<strong>City:</strong> <br /> {item.city}
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
							<div
								className="btn-group position-absolute top-25 end-0 me-5"
								role="group"
								aria-label="Basic mixed styles example">
								<Link to="/TruckerMessages" className="btn btn-warning">
									Accept
								</Link>
								<button
									type="button"
									className="btn btn-danger"
									onClick={() => actions.deleteRequest(item)}>
									Remove
								</button>
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
