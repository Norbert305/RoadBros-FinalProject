import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ServiceCompleted = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container pt-5 text-center text-light fs-4">
			<h1>
				Congratulations!
				<br />
				Your Service was Completed
			</h1>

			<h2 className="m-4">Please rate your trucker below</h2>

			<Link to="/RatingPage">
				<button className="btn btn-warning btn-lg m-3">Rate Trucker</button>
			</Link>
		</div>
	);
};
