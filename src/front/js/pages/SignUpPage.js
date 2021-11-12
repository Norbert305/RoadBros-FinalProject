import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUpPage = () => {
	const { actions } = useContext(Context);

	const addNewUser = () => {
		actions.addUser(newUser);
	};

	const [newUser, setNewUser] = useState({
		type: null,
		fullName: null,
		email: null,
		phone: null,
		city: null,
		picture: null
	});

	const handleChange = e => setNewUser({ ...newUser, [e.target.name]: e.target.value });

	const [tab, setTab] = useState("client");

	return (
		<div className="container text-center mt-5">
			<h1>Sign Up Page</h1>
			<div className="row">
				<div className="col" />
				<div className="col-2 text-center m-2 mb-1">
					<ul className="nav nav-pills p-0 m-0 d-flex justify-content-center" id="pills-tab" role="tablist">
						<li className="nav-item" role="presentation">
							<button
								className={tab === "client" ? "nav-link active" : "nav-link"}
								id="pills-client-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-client"
								type="button"
								role="tab"
								aria-controls="pills-client"
								aria-selected="true"
								onClick={() => {
									setTab("client");
									setNewUser({ ...newUser, type: "client" });
								}}>
								Client
							</button>
						</li>
						<li className="nav-item" role="presentation">
							<button
								className={tab === "trucker" ? "nav-link active" : "nav-link"}
								id="pills-trucker-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-trucker"
								type="button"
								role="tab"
								aria-controls="pills-trucker"
								aria-selected="false"
								onClick={() => {
									setTab("trucker");
									setNewUser({ ...newUser, type: "trucker" });
								}}>
								Trucker
							</button>
						</li>
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
					<Link to="/ClientLoginPage">
						<button className="btn btn-primary p-2 mt-3" onClick={() => addNewUser()}>
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
					<Link to="/TruckerLoginPage">
						<button className="btn btn-primary p-2 mt-3" onClick={() => addNewUser()}>
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
