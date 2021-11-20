import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const AwaitingResponse = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container pt-5 text-center">
			<h1 className="mb-4">Awaiting Response Page</h1>

			<div className="row spinner-border text-info m-5 spinnerSize" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>

			<div className="row m-2">
				<Link to="/ClientMessages">
					<button className="btn btn-warning btn-lg m-3">Messages</button>
				</Link>
			</div>
		</div>
	);
};
