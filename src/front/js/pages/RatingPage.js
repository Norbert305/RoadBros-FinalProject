import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const RatingPage = () => {
	const { store, actions } = useContext(Context);

	const [newRating, setnewRating] = useState({
		thumbUp: null,
		thumbDown: null,
		comments: null
	});

	const handleChange = e => setnewRating({ ...newRating, [e.target.name]: e.target.value });
	return (
		<div className="container pt-5 text-center text-light fs-4">
			<h1 className="mb-4">Thank You!</h1>
			<h5 className="m-5">How would you rate your experience with ___________ ?</h5>

			<div className="row justify-content-center m-3 ">
				<button
					type="button"
					className="btn btn-light col"
					onClick={() =>
						alert(
							"Thank you for your feed back! You will recieve an notifcation email in regards to todays service! Please fill out our comment section below on how we can improve! "
						)
					}>
					<div className="col">
						<i className="fas fa-thumbs-up fa-4x" />
					</div>
				</button>
				<button
					type="button"
					className="btn btn-light col"
					onClick={() =>
						alert(
							"We apoligize! Sorry for the inconvenience! Please fill out our comment section below on how we can improve!"
						)
					}>
					<div className="col">
						<i className="fas fa-thumbs-down fa-4x" />
					</div>
				</button>
			</div>

			<div className="mt-5 p-3">
				<label htmlFor="exampleFormControlTextarea2" className="form-label">
					<h5>Use the field below to write additonal comments:</h5>
				</label>
				<textarea
					className="form-control"
					id="exampleFormControlTextarea2"
					rows="3"
					name="comments"
					onChange={handleChange}
				/>
			</div>

			<Link to="/ClientHomePage">
				<button
					className="btn btn-warning btn-lg mt-4"
					/*
					onClick={() => {
						actions.addRating(newRating);
					}}
					*/
				>
					Send Rating
				</button>
			</Link>
		</div>
	);
};
