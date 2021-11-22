import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const RequestsList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container pt-5 text-center">
			<h1 className="mb-4">Client Requests Page</h1>

			<ul className="list-group">
				{store.listOfRequests.map((item, index) => {
					return (
						<li className="list-group-item d-inline-flex align-items-center" key={index}>
							<img src={item.picture} className="img-fluid m-1" width="15%" height="400px" alt="..." />
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
							<p className="mx-2 text-start">
								<strong>Service:</strong> <br /> {item.service}
							</p>
							<p className="mx-2 text-start">
								<strong>Color:</strong> <br /> {item.vehicleColor}
							</p>
							<p className="mx-2 text-start">
								<strong>Plate:</strong> <br /> {item.vehiclePlate}
							</p>
							<p className="mx-2 text-start">
								<button
									type="button"
									className="btn btn-warning mx-3 p-1"
									onClick={() => actions.deleteRequest(item)}>
									Remove
								</button>
							</p>

							<Link to="/TruckerMessages">
								<p className="mx-2 text-start">
									<button className="btn btn-primary mx-3 p-1">Accept</button>
								</p>
							</Link>
						</li>
					);
				})}
			</ul>

			<Link to="/TruckerHomePage">
				<button className="btn btn-primary m-3">Home</button>
			</Link>
		</div>
	);
};
