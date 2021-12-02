import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/demo.scss";

export const RatingPage = () => {
	return (
		<div className="container py-4 px-3 text-center text-light fs-4 mt-3">
			<h1 className="my-5">Thank You!</h1>
			<h5 className="m-3">How would you rate your experience with ___________ ?</h5>

			<div className="row justify-content-center my-3">
				<div className="form-check form-check-inline">
					<input
						className="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio1"
						value="option1"
					/>
					<label className="form-check-label" htmlFor="inlineRadio1">
						1
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input
						className="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio2"
						value="option2"
					/>
					<label className="form-check-label" htmlFor="inlineRadio1">
						2
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input
						className="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio3"
						value="option3"
					/>
					<label className="form-check-label" htmlFor="inlineRadio2">
						3
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input
						className="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio4"
						value="option4"
					/>
					<label className="form-check-label" htmlFor="inlineRadio2">
						4
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input
						className="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio5"
						value="option5"
					/>
					<label className="form-check-label" htmlFor="inlineRadio2">
						5
					</label>
				</div>
			</div>

			<Link to="/ClientHomePage">
				<button className="btn btn-warning btn-lg p-2 m-3">Send Rating</button>
			</Link>
		</div>
	);
};
