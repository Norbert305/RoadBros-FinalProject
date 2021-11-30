import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ServiceCompleted = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container py-4 px-3 text-center text-light fs-4">
			<h1 className="my-5">
				Congratulations!
				<br />
				Your Service was Completed
			</h1>

			<h2 className="m-2">Please rate your trucker below</h2>

			<Link to="/RatingPage">
				<button className="btn btn-warning btn-lg p-2 m-3">Rate Trucker</button>
			</Link>
		</div>
	);
};
