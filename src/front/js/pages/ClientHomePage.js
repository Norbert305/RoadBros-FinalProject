import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { StripeCheckoutButton } from "../component/stripe-button";
import "../../styles/demo.scss";
import "../component/contactForm";

export const ClientHomePage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container py-4 px-3 text-center text-light fs-4 mt-3">
			<h1 className="text-center my-5">Home Page</h1>
			<div className="row my-3 d-flex justify-content-center">
				<Link to="/ServiceMenu">
					<button className="btn btn-warning btn-lg p-2 w-75 m-auto my-3">Request Help</button>
				</Link>
				<div
					className="col-9 bg-light text-dark p-0 rounded-3"
					onClick={() =>
						store.message == "empty"
							? actions.changeMessage("pending")
							: store.message == "pending"
								? actions.changeMessage("accepted")
								: store.message == "accepted"
									? actions.changeMessage("completed")
									: null
					}>
					{store.message == "pending" ? (
						<div className="border border-warning border-5 rounded-3 p-3">
							<p>REQUEST PENDING</p>
							<p>You have a pending request</p>
						</div>
					) : store.message == "accepted" ? (
						<div className="border border-success border-5 rounded-3 p-3">
							<p>ACCEPTED!</p>
							<p>
								Your request has been accepted by trucker Rafael Pomares, please contact your trucker at
								954 785 632 for further information.
							</p>
						</div>
					) : store.message == "completed" ? (
						<div className="border border-primary border-5 rounded-3 p-3">
							<p>COMPLETED!</p>
							<p>Your request has been completed</p>
							<Link to="/RatingPage">
								<button className="btn btn-danger m-auto my-2">Rate Trucker</button>
							</Link>
							<StripeCheckoutButton price={150} />
						</div>
					) : (
						<div className="rounded-3 p-3">
							<p>NO REQUEST PENDING</p>
							<p>You have no pending requests</p>
						</div>
					)}
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

/*
<div
						onClick={() =>
							({ message } == "No active request at the time"
								? setMessage(`Congratulations! Your request has been accepted by trucker Rafel Pomares, please contact your trucker at
							954 785 632 for further information.`)
								: setMessage(`Congratulations! your request has been completed, please rate your trucker by clicking this button
							${(
								<Link to="/RatingPage">
									<button className="btn btn-warning btn-lg p-2 m-3">Rate Your Trucker</button>
								</Link>
							)}`))
						}
					/> */
