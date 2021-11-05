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
						<label>Vehicle Model</label>
						<input
							type="text"
							className="form-control"
							placeholder="Vehicle Model"
							name="vehicle_model"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-1">
						<label>Vehicle Make</label>
						<input
							type="text"
							className="form-control"
							placeholder="Vehicle Make"
							name="vehicle_make"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-1">
						<label>Vehicle Year</label>
						<input
							type="text"
							className="form-control"
							placeholder="Vehicle Year"
							name="vehicle_year"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-1">
						<label>Vehicle type</label>
						<input
							type="text"
							className="form-control"
							placeholder="Vehicle type"
							name="vehicle_type"
							onChange={handleChange}
						/>
					</div>
				</form>
				<Link to="/AddVehicles">
					<button className="btn btn-primary p-2 mt-3 me-3">Add Another Vehicle</button>
				</Link>
				<Link to="/ServiceMenu">
					<button className="btn btn-primary p-2 mt-3">Next</button>
				</Link>
			</div>
		</div>
	);
};

AddVehicles.propTypes = {
	history: PropTypes.object
};
