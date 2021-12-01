import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const TruckerEditProfile = () => {
	const { store, actions } = useContext(Context);

	const [updatedUser, setUpdatedUser] = useState({
		full_name: null,
		email: null,
		phone: null,
		zip_code: null
	});

	const handleChange = e => setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });

	return (
		<div className="container py-4 px-3 text-center text-light fs-4">
			<h1 className="text-center my-5">User Information</h1>

			<h2>Change your information on the fields below</h2>

			<form className="text-start">
				<div className="form-group my-1">
					<label>Full Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Edit Full Name"
						name="full_name"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group my-1">
					<label>Email</label>
					<input
						type="email"
						className="form-control"
						placeholder="Edit email"
						name="email"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group my-1">
					<label>Phone</label>
					<input
						type="text"
						className="form-control"
						placeholder="Edit Phone Number"
						name="phone"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group my-1">
					<label>Zip Code</label>
					<input
						type="text"
						className="form-control"
						placeholder="Edit zip code"
						name="zip_code"
						onChange={handleChange}
					/>
				</div>
			</form>
			<Link to="/TruckerProfile">
				<button
					className="btn btn-warning btn-lg p-2 m-3"
					onClick={() => {
						actions.updateProfile(updatedUser);
					}}>
					Save Changes
				</button>
			</Link>
			<Link to="/TruckerProfile">
				<button className="btn btn-warning btn-lg p-2 m-3">Back to Profile</button>
			</Link>
			<Link to="/TruckerHomePage">
				<button className="btn btn-warning btn-lg p-2 m-3">Back to Home</button>
			</Link>
		</div>
	);
};
