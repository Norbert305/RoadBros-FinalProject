import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ManagingService = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container py-4 px-3 text-center text-light fs-4">
			<h1 className="my-5">Manage your Service</h1>

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
