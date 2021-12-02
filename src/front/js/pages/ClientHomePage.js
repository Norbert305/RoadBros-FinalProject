import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ClientHomePage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container py-4 px-3 text-center text-light fs-4">
			<h1 className="text-center my-5">Home Page</h1>
<<<<<<< HEAD

			<div className="row my-3 d-flex justify-content-center">
				<Link to="/ServiceMenu">
					<button className="btn btn-warning btn-lg p-2 m-3 mb-4">Request Help</button>
				</Link>
				<div className="col-4 bg-light text-dark p-3 rounded-3">
					<div
						onClick={() =>
							store.listOfRequests.length < 0 ? (
								<h5>No request active a the time</h5>
							) : (
								<h5>
									{" "}
									Congratulations! your request has been accepted, please contact your trucker at{" "}
									{store.loggedTrucker.phone} for further information.
								</h5>
							)
						}
					/>
				</div>
			</div>
			<div className="row my-3 d-flex flex-column justify-content-center">
				<Link to="/VehiclesList">
					<button className="btn btn-warning btn-lg p-2 m-3">Vehicles List</button>
=======
			<div className="row my-3 d-flex flex-column justify-content-center">
				<Link to="/ServiceMenu">
					<button className="btn btn-warning btn-lg p-2 m-3">Request Help</button>
				</Link>
				<div className="row m-auto d-flex tex-center justify-content-center">
					<div className="col-4 bg-light text-dark p-3 rounded-3">
						<div>
							<h5>No request at the time</h5>
						</div>
					</div>
				</div>
				<Link to="/ClientProfile">
					<button className="btn btn-warning btn-lg p-2 m-3">Profile</button>
>>>>>>> 27827450057c1a70427e3b1e4a99f69874d1d756
				</Link>
				<Link to="/ServiceHistory">
					<button className="btn btn-warning btn-lg m-3">Service History</button>
				</Link>
				<Link to="/ClientProfile">
					<button className="btn btn-warning btn-lg p-2 m-3">Profile</button>
				</Link>
			</div>
		</div>
	);
};
