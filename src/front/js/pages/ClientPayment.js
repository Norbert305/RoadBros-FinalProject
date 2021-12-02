import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { NavbarClient } from "../component/NavbarClient";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ClientPayment = () => {
	const { actions, store } = useContext(Context);

	return (
		<div className="container p-4 text-center text-light fs-6 mt-3">
			<div>
				<h1 className="text-center my-5">Payment Page</h1>
				<form className="text-start fs-3">
					<div className="form-group my-1">
						<label>Card Information</label>
						<input
							type="text"
							className="form-control shadow-sm"
							placeholder="1234 1234 1234 1234"
							name="card_info"
						/>
					</div>
					<div className="form-group my-1">
						<label>Name on Card</label>
						<input
							type="text"
							className="form-control shadow-sm"
							placeholder="Enter Name"
							name="card_name"
						/>
					</div>
					<div className="form-group my-1">
						<label>Country or Region</label>
						<select id="inputState" className="form-select my-1 shadow-sm">
							<option selected>United States</option>
							<option>Puerto Rico</option>
							<option>Colombia</option>
							<option>Venezuela</option>
						</select>
						<input type="phone" className="form-control shadow-sm" placeholder="ZIP" name="zip" />
					</div>
					<div className="form-group my-1">
						<label>City</label>
						<input type="text" className="form-control shadow-sm" placeholder="Enter city" name="city" />
					</div>
				</form>
				<Link to="/ClientHomePage">
					<button type="button" className="btn btn-warning btn-lg p-2 m-3">
						Home
					</button>
				</Link>
			</div>
		</div>
	);
};
