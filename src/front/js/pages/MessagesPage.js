import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const MessagesPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container m-5 text-center">
			<h1>Messaging Page</h1>

			<h5 className="m-4">Here, you can message your client/Trucker direclty!</h5>

			<div className="card mb-3">
				<div className="row d-flex justify-content-start px-5 pt-5 pb-1">
					<div className="col-3 bg-info text-start p-2 rounded">Hello, I am 20 mins away.</div>
				</div>
				<div className="row d-flex justify-content-end px-5 pb-5 pt-1">
					<div className="col-3 bg-primary text-start p-2 rounded">Thank You for keeping me updated!</div>
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
			{store.user.type == "Client" ? (
				<Link to="/ServiceCompleted">
					<button type="button" className="btn btn-primary btn-lg my-3 p-2 me-3">
						Next
					</button>
				</Link>
			) : (
				<Link to="/ManagingService">
					<button type="button" className="btn btn-primary btn-lg my-3 p-2 me-3">
						Next
					</button>
				</Link>
			)}
			<Link to="/ServiceCompleted">
				<button type="button" className="btn btn-primary btn-lg my-3 p-2 me-3">
					For Customers
				</button>
			</Link>
		</div>
	);
};
