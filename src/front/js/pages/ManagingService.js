import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ManagingService = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container py-4 px-3 text-center text-light fs-4">
			<h1 className="my-5">Manage your Service</h1>
			<div className="row my-3 d-flex justify-content-center">
				<div className="col-9 bg-light text-dark p-3 rounded-3">
					<div className="text-start">
						<h5 className="text-center mb-3">
							Thank you for helping others, here is the information about your client:
						</h5>
						<h5>
							<strong>Client name:</strong> {store.loggedUser.full_name}
						</h5>
						<h5>
							<strong>Client Zip Code:</strong> {store.loggedUser.zip_code}
						</h5>
						<h5>
							<strong>Client Vehicle:</strong>
						</h5>
						<h5>
							<strong>Client Issues:</strong>
						</h5>

						<h5 className="text-center mt-3">
							Please contact your client at {store.loggedUser.phone} for further information.
						</h5>
					</div>
				</div>
			</div>
			<button className="btn btn-warning btn-lg p-2 m-3" onc>
				Start Service
			</button>
			<br />
			<Link to="/TruckerHomePage">
				<button className="btn btn-warning btn-lg p-2 m-3">End Service</button>
			</Link>
		</div>
	);
};
