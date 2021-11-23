import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const TruckerMessages = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container p-5 text-center">
			<h1>Messaging Page</h1>

			<h5 className="m-2">Here, you can message your client direclty!</h5>

			<div className="card mb-3">
				<div className="row d-flex justify-content-end p-3">
					<div className="col-3 bg-secondary text-light text-start p-2 rounded">
						Hello, I am 20 mins away.
					</div>
				</div>
				<div className="row d-flex justify-content-start p-3">
					<div className="col-3 bg-warning text-light text-start p-2 rounded">
						Thank You for keeping me updated!
					</div>
				</div>

				<div className="card-footer d-inline-flex align-items-center justify-content-start">
					<div className="input-group m-3">
						<input
							type="text"
							className="form-control"
							placeholder="Enter message"
							aria-label="Recipient's username"
							aria-describedby="button-addon2"
						/>
						<button className="btn btn-outline-secondary" type="button" id="button-addon2">
							Send Message
						</button>
					</div>
				</div>
			</div>
			<Link to="/ManagingService">
				<button type="button" className="btn btn-warning btn-lg p-2 m-3">
					Manage Service
				</button>
			</Link>
		</div>
	);
};
