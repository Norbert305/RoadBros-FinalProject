import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavbarClient } from "../component/navbarClient";
export const AddVehicles = () => {
	const { actions } = useContext(Context);

	const [newVehicle, setnewVehicle] = useState({
		vehicleModel: null,
		vehicleMake: null,
		vehicleYear: null,
		vehicleType: null,
		vehicleColor: null,
		vehiclePlate: null
	});

	const handleChange = e => setnewVehicle({ ...newVehicle, [e.target.name]: e.target.value });

	return (
		<div className="container pt-5 px-3 text-center text-light fs-4">
			<div>
				<h1 className="text-center">Add Vehicles</h1>
				<form className="text-start">
					<div className="form-group my-2">
						<label>Type</label>
						<input
							type="text"
							className="form-control"
							placeholder="Type"
							name="vehicleType"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-2">
						<label>Make</label>
						<input
							type="text"
							className="form-control"
							placeholder="Make"
							name="vehicleMake"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-2">
						<label>Model</label>
						<input
							type="text"
							className="form-control"
							placeholder="Model"
							name="vehicleModel"
							onChange={handleChange}
						/>
					</div>

					<div className="form-group my-2">
						<label>Year</label>
						<input
							type="text"
							className="form-control"
							placeholder="Year"
							name="vehicleYear"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-2">
						<label>Color</label>
						<input
							type="text"
							className="form-control"
							placeholder="Color"
							name="vehicleColor"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-2">
						<label>Plate Number</label>
						<input
							type="text"
							className="form-control"
							placeholder="Plate"
							name="vehiclePlate"
							onChange={handleChange}
						/>
					</div>
				</form>
				<Link to="/ClientHomePage">
					<button
						className="btn btn-warning btn-lg p-2 m-3 mb-5"
						onClick={() => {
							actions.addVehicle(newVehicle);
						}}>
						Add Vehicle
					</button>
				</Link>
				<Link to="/ClientHomePage">
					<button className="btn btn-warning btn-lg p-2 m-3 mb-5">Home</button>
				</Link>
			</div>
		</div>
	);
};

AddVehicles.propTypes = {
	history: PropTypes.object
};
