import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const TruckerHomePage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container py-4 px-3 text-center text-light fs-4">
			<h1 className="text-center my-5">Home Page</h1>
			<Link to="/RequestsList">
				<button className="btn btn-warning btn-lg p-2 m-3">Requests List</button>
			</Link>
			<Link to="/TruckerServiceHistory">
				<button className="btn btn-warning btn-lg p-2 m-3">Service History</button>
			</Link>
		</div>
	);
};
