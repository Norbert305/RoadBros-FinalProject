import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import "../component/contactForm";

export const ClientHomePage = () => {
	const { store, actions } = useContext(Context);

	const { message, setMessage } = useState("No active request at the time");

	return (
		<div className="container py-4 px-3 text-center text-light fs-4 mt-3">
			<h1 className="text-center my-5">Home Page</h1>
			<div className="row my-3 d-flex justify-content-center">
				<Link to="/ServiceMenu">
					<button className="btn btn-warning btn-lg p-2 w-75 m-auto my-3">Request Help</button>
				</Link>
				<div className="col-4 bg-light text-dark p-3 rounded-3">
					<div
						onClick={() =>
							({ message } == "No active request at the time"
								? setMessage(`Congratulations! your request has been accepted, please contact your trucker at 
							${store.loggedUser.phone} for further information.`)
								: setMessage(`Congratulations! your request has been completed, please rate your trucker by clicking this button 
							${(
								<Link to="/RatingPage">
									<button className="btn btn-warning btn-lg p-2 m-3">Rate Your Trucker</button>
								</Link>
							)}`))
						}
					/>
				</div>
			</div>
			<div className="row my-3 d-flex flex-column justify-content-center">
				<Link to="/VehiclesList">
					<button className="btn btn-warning btn-lg p-2 w-75 m-auto my-3">Vehicles List</button>
				</Link>

				<Link to="/ServiceHistory">
					<button className="btn btn-warning btn-lg w-75 m-auto my-3">Service History</button>
				</Link>
				<Link to="/ClientProfile">
					<button className="btn btn-warning btn-lg p-2 w-75 m-auto my-3">Profile</button>
				</Link>
				<Link to="/ClientContactUs">
					<button className="btn btn-warning btn-lg p-2 w-75 m-auto my-3">Contact Us</button>
				</Link>
			</div>
		</div>
	);
};
