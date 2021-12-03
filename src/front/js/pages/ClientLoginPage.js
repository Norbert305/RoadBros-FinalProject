import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const ClientLoginPage = props => {
	const { actions, store } = useContext(Context);

	const [valid, setValid] = useState(false);

	const [newContact, setnewContact] = useState({
		email: null,
		password: null
	});

	const handleChange = e => setnewContact({ ...newContact, [e.target.name]: e.target.value });

	const login = myLogin => {
		console.log("login");
		fetch(`${store.backEndUrl}/api/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(myLogin)
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setValid(true);
			})
			.catch(err => {
				console.error("Error:", err);
				alert("wrong user information");
			});
	};

	return (
		<div className="container p-4 mt-3 text-center text-light fs-6">
			<h1 className="my-5">Client Login</h1>
			<form className="text-start">
				<div className="form-group my-1">
					<label>Email</label>
					<input
						type="email"
						className="form-control shadow-sm"
						placeholder="Email"
						name="email"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group my-1">
					<label>Password</label>
					<input
						type="password"
						className="form-control shadow-sm"
						placeholder="Password"
						name="password"
						onChange={handleChange}
					/>
				</div>
			</form>

			<button type="button" className="btn btn-warning btn-lg p-2 m-3" onClick={() => login(newContact)}>
				Next
			</button>

			{valid == true ? <Redirect to="/ClientHomePage" /> : ""}
		</div>
	);
};

ClientLoginPage.propTypes = {
	history: PropTypes.object,
	setUserLogin: PropTypes.func
};
