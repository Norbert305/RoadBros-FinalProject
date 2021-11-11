import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const TruckerPayment = () => {
	const { actions, store } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<div>
				<h1>Payment Page</h1>
				<form className="text-start">
					<div className="form-group my-1">
						<label>Card Information</label>
						<input
							type="text"
							className="form-control"
							placeholder="1234 1234 1234 1234"
							name="card_info"
						/>
					</div>
					<div className="form-group my-1">
						<label>Name on Card</label>
						<input type="text" className="form-control" placeholder="Enter Name" name="card_name" />
					</div>
					<div className="form-group my-1">
						<label>Country or Region</label>
						<select id="inputState" className="form-select my-1">
							<option selected>United States</option>
							<option>Puerto Rico</option>
							<option>Colombia</option>
							<option>Venezuela</option>
						</select>
						<input type="phone" className="form-control" placeholder="ZIP" name="zip" />
					</div>
					<div className="form-group my-1">
						<label>City</label>
						<input type="text" className="form-control" placeholder="Enter city" name="city" />
					</div>
				</form>
				<Link to="/TruckerHomePage">
					<button type="button" className="btn btn-primary btn-lg my-3 p-2 me-3">
						Next
					</button>
				</Link>
			</div>
		</div>
	);
};
