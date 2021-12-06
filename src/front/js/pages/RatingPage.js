import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StarRating } from "../component/starRating";
import "../../styles/demo.scss";

export const RatingPage = () => {
	return (
		<div className="container py-4 px-3 text-center text-light fs-4 mt-3">
			<h1 className="my-5">Thank You!</h1>
			<h5 className="m-3">How would you rate your experience?</h5>

			<div className="row justify-content-center my-3" />
			<StarRating />

			<Link to="/ClientHomePage">
				<button className="btn btn-warning btn-lg p-2 m-3">Send Rating</button>
			</Link>
		</div>
	);
};
