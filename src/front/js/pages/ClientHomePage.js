import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ClientHomePage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container pt-5 text-center text-light fs-4">
			<h1 className="text-center">Home Page</h1>

			<h2 className="text-center mb-4">Hi, Welcome back _____!</h2>

			<Link to="/ServiceMenu">
				<button className="btn btn-warning btn-lg m-3">Request Help</button>
			</Link>
			<Link to="/ServiceHistory">
				<button className="btn btn-warning btn-lg m-3">Service History</button>
			</Link>
			<Link to="/VehiclesList">
				<button className="btn btn-warning btn-lg m-3">Vehicles List</button>
			</Link>
			<Link to="/">
				<button className="btn btn-warning btn-lg m-3">Back to Landing Page</button>
			</Link>
		</div>
	);
};
