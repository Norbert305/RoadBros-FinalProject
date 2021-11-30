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

			<div className="row my-3 d-flex justify-content-center">
				<div className="col-4 bg-light text-dark p-3 rounded">
					<div>
						<h5>No request at the time</h5>
					</div>
				</div>
			</div>

			<Link to="/ServiceMenu">
				<button className="btn btn-warning btn-lg p-2 m-3">Request Help</button>
			</Link>
			<Link to="/ServiceHistory">
				<button className="btn btn-warning btn-lg m-3">Service History</button>
			</Link>
			<Link to="/VehiclesList">
				<button className="btn btn-warning btn-lg p-2 m-3">Vehicles List</button>
			</Link>
		</div>
	);
};
