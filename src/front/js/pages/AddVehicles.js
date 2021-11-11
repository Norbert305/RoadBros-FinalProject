import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddVehicles = () => {
	const { actions } = useContext(Context);

	const [newVehicle, setnewVehicle] = useState({
		vehicleModel: null,
		vehicleMake: null,
		vehicleYear: null,
		vehicleType: null
	});

	const handleChange = e => setnewVehicle({ ...newVehicle, [e.target.name]: e.target.value });

	return (
		<div className="container mt-5 text-center">
			<div>
				<h1 className="text-center">Add Vehicles Page</h1>
				<form className="text-start">
					<div className="form-group my-1">
						<label>Type</label>
						<input
							type="text"
							className="form-control"
							placeholder="Type"
							name="vehicleType"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-1">
						<label>Make</label>
						<input
							type="text"
							className="form-control"
							placeholder="Make"
							name="vehicleMake"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-1">
						<label>Model</label>
						<input
							type="text"
							className="form-control"
							placeholder="Model"
							name="vehicleModel"
							onChange={handleChange}
						/>
					</div>

					<div className="form-group my-1">
						<label>Year</label>
						<input
							type="text"
							className="form-control"
							placeholder="Year"
							name="vehicleYear"
							onChange={handleChange}
						/>
					</div>
				</form>
				<Link to="/ClientHomePage">
					<button
						className="btn btn-primary p-2 m-3"
						/*
						onClick={() => {
							actions.addVehicle(newVehicle);
						}}
						*/
					>
						Add Vehicle
					</button>
				</Link>
				<Link to="/ClientHomePage">
					<button className="btn btn-primary p-2 m-3">Home</button>
				</Link>
			</div>
		</div>
	);
};

AddVehicles.propTypes = {
	history: PropTypes.object
};
