import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUpPage = () => {
	const { actions, store } = useContext(Context);

	const [newUser, setNewUser] = useState({
		user_type: "client",
		full_name: null,
		email: null,
		password: null,
		phone: null
	});

	const handleChange = e => setNewUser({ ...newUser, [e.target.name]: e.target.value });

	const [tab, setTab] = useState("client");

	const addUser = myNewUser => {
		console.log("new user");
		fetch(`${store.backEndUrl}/api/user`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(myNewUser)
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(err => console.error("Error:", err));
	};

	return (
		<div className="container p-4 text-center text-light fs-6">
			<h1 className="m-3">Sign Up Page</h1>
			<div className="row">
				<div className="col" />
				<div className="col-2 text-center m-2 mb-1 text-light">
					<ul className="nav nav-pills p-0 m-0 d-flex justify-content-center" id="pills-tab" role="tablist">
						<div className="nav-item" role="presentation">
							<button
								className={tab === "client" ? "nav-link active bg-warning text-dark" : "nav-link"}
								id="pills-client-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-client"
								type="button"
								s
								role="tab"
								aria-controls="pills-client"
								aria-selected="true"
								onClick={() => {
									setTab("client");
									setNewUser({ ...newUser, user_type: "client" });
								}}>
								Client
							</button>
						</div>
						<div className="nav-item" role="presentation">
							<button
								className={tab === "trucker" ? "nav-link active bg-warning text-dark" : "nav-link"}
								id="pills-trucker-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-trucker"
								type="button"
								role="tab"
								aria-controls="pills-trucker"
								aria-selected="false"
								onClick={() => {
									setTab("trucker");
									setNewUser({ ...newUser, user_type: "trucker" });
								}}>
								Trucker
							</button>
						</div>
					</ul>
				</div>
				<div className="col" />
			</div>

			<div className="tab-content" id="pills-tabContent">
				<div
					className={tab === "client" ? "tab-pane fade show active" : "tab-pane fade"}
					id="pills-client"
					role="tabpanel"
					aria-labelledby="pills-client">
					<h5 className="text-start my-2">Signing up as a client</h5>
					<form className="text-start">
						<div className="form-group my-1">
							<label>Full Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Full Name"
								name="full_name"
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
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								placeholder="Enter Password"
								name="password"
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
					</form>
					<Link to="/CLientHomePage">
						<button className="btn btn-warning btn-lg col-4 p-2 mt-3 mb-5" onClick={() => addUser(newUser)}>
							Save
						</button>
					</Link>
				</div>
				<div
					className={
						tab === "trucker"
							? "tab-pane fade show active"
							: "tab-pane fade bg-secondary bg-opacity-25 py-3"
					}
					id="pills-trucker"
					role="tabpanel"
					aria-labelledby="pills-trucker-tab">
					<h5 className="text-start my-2">Signing up as a trucker</h5>
					<form className="text-start">
						<div className="form-group my-1">
							<label>Full Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Full Name"
								name="full_name"
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
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								placeholder="Enter Password"
								name="password"
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
					</form>
					<Link to="/TruckerHomePage">
						<button className="btn btn-warning btn-lg col-4 p-2 mt-3 mb-5" onClick={() => addUser(newUser)}>
							Save
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

SignUpPage.propTypes = {
	history: PropTypes.object
};
