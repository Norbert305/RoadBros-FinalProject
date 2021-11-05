import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const RatingPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<h1 className="mb-4">Thank You!</h1>
			<h5 className="m-5">How would you rate your experience with ___________ ?</h5>

			<div className="row justify-content-center m-3">
				<div className="col-2">
					<i className="fas fa-thumbs-up fa-4x" />
				</div>
				<div className="col-2">
					<i className="fas fa-thumbs-down fa-4x" />
				</div>
			</div>

			<div className="mt-5">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">
					<h5>Use the field below to write additonal comments:</h5>
				</label>
				<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
			</div>

			<Link to="/ClientHomePage">
				<button className="btn btn-primary mt-4">Send Rating</button>
			</Link>
		</div>
	);
};
