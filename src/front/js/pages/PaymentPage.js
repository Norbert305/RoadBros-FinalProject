import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const PaymentPage = () => {
	const { actions } = useContext(Context);

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
						<input type="text" className="form-control" placeholder="Name on Card" name="card_name" />
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
				<Link to="/AddVehicles">
					<button className="btn btn-primary m-3">Next (Client)</button>
				</Link>
				<Link to="/TruckerHomePage">
					<button className="btn btn-primary m-3">Next (Trucker)</button>
				</Link>
			</div>
		</div>
	);
};
