import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const TruckerProfile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container py-4 px-3 text-center text-light fs-4">
			<h1 className="text-center my-5">Profile</h1>

			<div className="row d-flex justify-content-center mb-3">
				<div className="col mx-4 text-start">
					<h3 className="text-center">
						<strong>User Information</strong>
					</h3>
					<h5>
						<strong>Full Name: </strong>
						{store.loggedUser.full_name}
					</h5>
					<h5>
						<strong>Email: </strong>
						{store.loggedUser.email}
					</h5>
					<h5>
						<strong>Phone: </strong>
						{store.loggedUser.phone}
					</h5>
					<h5>
						<strong>Zip Code: </strong>
						{store.loggedUser.zip_code}
					</h5>
				</div>
			</div>

			<div className="row my-3 d-flex flex-column justify-content-center">
				<Link to="/TruckerEditProfile">
					<button className="btn btn-warning btn-lg p-2 m-3">Edit Profile</button>
				</Link>
				<Link to="/TruckerPayment">
					<button className="btn btn-warning btn-lg p-2 m-3">Payment Information</button>
				</Link>
				<Link to="/RequestsList">
					<button className="btn btn-warning btn-lg p-2 m-3">Requests List</button>
				</Link>
				<Link to="/TruckerHomePage">
					<button className="btn btn-warning btn-lg p-2 m-3">Back to Home</button>
				</Link>
			</div>
		</div>
	);
};
