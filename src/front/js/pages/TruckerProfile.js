import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const TruckerProfile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container py-4 px-3 text-center text-light fs-4">
			<h1 className="text-center my-5">Profile</h1>
			<Link to="/TruckerPayment">
				<button className="btn btn-warning btn-lg p-2 m-3">Payment Information</button>
			</Link>
		</div>
	);
};
