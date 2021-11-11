import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ClientHomePage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<h1 className="text-center">Home Page for Client</h1>
			<div className="text-center">
				<img
					src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
					className="rounded"
					alt="..."
				/>
			</div>
			<h2 className="text-center">Hi Welcome back _____!</h2>

			<Link to="/ServiceMenu">
				<button className="btn btn-primary m-3">Request Help</button>
			</Link>
			<Link to="/ServiceHistory">
				<button className="btn btn-primary m-3">Service History</button>
			</Link>
			<Link to="/VehiclesList">
				<button className="btn btn-primary m-3">Vehicles List</button>
			</Link>
			<Link to="/">
				<button className="btn btn-primary m-3">Back to Landing Page</button>
			</Link>
		</div>
	);
};
