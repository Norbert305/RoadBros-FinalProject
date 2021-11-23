import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const TruckerHomePage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container pt-5 text-center text-light">
			<h1 className="text-center">Home Page</h1>

			<h2 className="text-center mb-4">Hi, Welcome back _______!</h2>

			<Link to="/RequestsList">
				<button className="btn btn-warning btn-lg m-3">Requests List</button>
			</Link>

			<Link to="/">
				<button className="btn btn-warning btn-lg m-3">Back to Landing Page</button>
			</Link>
			<Link to="/ServiceHistory">
				<button className="btn btn-warning btn-lg m-3">Service History</button>
			</Link>
		</div>
	);
};
