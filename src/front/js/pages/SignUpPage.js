import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUpPage = () => {
	const { actions } = useContext(Context);

	const [newUser, setnewUser] = useState({
		type: null,
		fullName: null,
		email: null,
		phone: null,
		city: null,
		picture: null
	});

	const handleChange = e => setnewUser({ ...newUser, [e.target.name]: e.target.value });

	return (
		<div className="container text-center mt-5">
			<div>
				<h1>Sign Up Page</h1>
				<form className="text-start">
					<div className="form-group my-1">
						<label>Client or Trucker</label>
						<select id="inputState" className="form-select my-1" name="type" onChange={handleChange}>
							<option selected>Select One</option>
							<option>Client</option>
							<option>Trucker</option>
						</select>
					</div>
					<div className="form-group my-1">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="fullName"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-1">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-1">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-1">
						<label>City</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter city"
							name="city"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-1">
						<label>Profile Picture</label>
						<div className="input-group">
							<input
								type="file"
								className="form-control"
								id="inputGroupFile04"
								aria-describedby="inputGroupFileAddon04"
								aria-label="Upload"
								name="picture"
								onChange={handleChange}
							/>
						</div>
					</div>
				</form>
				<Link to="/">
					<button className="btn btn-primary p-2 mt-3">Next</button>
				</Link>
			</div>
		</div>
	);
};

SignUpPage.propTypes = {
	history: PropTypes.object
};
