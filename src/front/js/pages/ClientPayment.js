import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ClientPayment = () => {
	const { actions, store } = useContext(Context);

	return (
		<div className="container pt-5 text-center">
			<div>
				<h1>Payment Page</h1>
				<form className="text-start text-light fs-4">
					<div className="form-group my-2">
						<label>Card Information</label>
						<input
							type="text"
							className="form-control"
							placeholder="1234 1234 1234 1234"
							name="card_info"
						/>
					</div>
					<div className="form-group my-2">
						<label>Name on Card</label>
						<input type="text" className="form-control" placeholder="Enter Name" name="card_name" />
					</div>
					<div className="form-group my-2">
						<label>Country or Region</label>
						<select id="inputState" className="form-select my-1">
							<option selected>United States</option>
							<option>Puerto Rico</option>
							<option>Colombia</option>
							<option>Venezuela</option>
						</select>
						<input type="phone" className="form-control" placeholder="ZIP" name="zip" />
					</div>
					<div className="form-group my-2">
						<label>City</label>
						<input type="text" className="form-control" placeholder="Enter city" name="city" />
					</div>
				</form>
				<Link to="/AddVehicles">
					<button type="button" className="btn btn-warning btn-lg my-3 p-2 me-3">
						Next
					</button>
				</Link>
			</div>
		</div>
	);
};
