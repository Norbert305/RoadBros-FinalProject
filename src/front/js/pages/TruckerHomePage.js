import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const TruckerHomePage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container pt-5 text-center text-light">
			<h1 className="text-center">Home Page for Truckers</h1>
			<div className="text-center p-5">
				<img
					src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
					className="rounded"
					alt="..."
				/>
			</div>
			<h2 className="text-center">Hi Welcome back _____!</h2>

			<Link to="/RequestsList">
				<button className="btn btn-warning btn-lg m-3">Requests List</button>
			</Link>

			<Link to="/">
				<button className="btn btn-warning btn-lg m-3">Back to Landing Page</button>
			</Link>
		</div>
	);
};
