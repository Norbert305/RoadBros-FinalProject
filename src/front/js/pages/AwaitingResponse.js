import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const AwaitingResponse = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<h1 className="mb-4">Awaiting Response Page</h1>

			<div className="row spinner-border text-info m-4 spinnerSize" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>

			<div className="row m-2">
				<Link to="/MessagesPage">
					<button className="btn btn-primary m-3">Go to Messages</button>
				</Link>
			</div>
		</div>
	);
};
