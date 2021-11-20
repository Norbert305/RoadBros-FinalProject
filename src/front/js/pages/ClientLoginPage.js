import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ClientLoginPage = props => {
	const { actions, store } = useContext(Context);

	const [newContact, setnewContact] = useState({
		email: null,
		password: null
	});

	const handleChange = e => setnewContact({ ...newContact, [e.target.name]: e.target.value });

	return (
		<div className="container text-center pt-5">
			<h1 className="">Client Login Page</h1>
			<form className="text-start mt-5">
				<div className="form-group my-1">
					<input
						type="email"
						className="form-control"
						placeholder="Email"
						name="email"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group my-1">
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						name="password"
						onChange={handleChange}
					/>
				</div>
			</form>
			<Link to="/ClientPayment">
				<button
					type="button"
					className="btn btn-warning btn-lg my-3 p-2 me-3"
					onClick={() => actions.login(newContact.email)}>
					Next
				</button>
			</Link>
		</div>
	);
};

ClientLoginPage.propTypes = {
	history: PropTypes.object,
	setUserLogin: PropTypes.func
};
