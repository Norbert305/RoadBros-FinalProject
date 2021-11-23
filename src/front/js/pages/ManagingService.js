import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ManagingService = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container pt-5 px-3 text-center">
			<h1 className="mb-5">Manage your Service</h1>

			<button className="btn btn-warning p-2 m-3 btn-lg" onc>
				Start Service
			</button>
			<br />
			<Link to="/TruckerHomePage">
				<button className="btn btn-warning p-2 m-3 btn-lg">End Service</button>
			</Link>
		</div>
	);
};
