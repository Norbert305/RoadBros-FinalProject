import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const AddVehicles = () => {
	const { actions, store } = useContext(Context);

	const [newVehicle, setnewVehicle] = useState({
		vehicle_model: null,
		vehicle_make: null,
		vehicle_year: null,
		vehicle_type: null,
		vehicle_color: null,
		vehicle_plate: null,
		user_id: store.loggedUser.id
	});

	const handleChange = e => setnewVehicle({ ...newVehicle, [e.target.name]: e.target.value });

	const addVehicle = myNewVehicle => {
		console.log("new vehicle");
		fetch(`${process.env.BACKEND_URL}/api/vehicle`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(myNewVehicle)
		})
			.then(response => response.json())
			.then(data => actions.addVehicle(data))
			.catch(err => console.error("Error:", err));
	};

	return (
		<div className="container p-4 text-center text-light fs-6 m-auto">
			<div>
				<h1 className="text-center m-3">Add Vehicles</h1>
				<form className="text-start">
					<div className="form-group my-2">
						<label>Type</label>
						<input
							type="text"
							className="form-control"
							placeholder="Type"
							name="vehicle_type"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-2">
						<label>Make</label>
						<input
							type="text"
							className="form-control"
							placeholder="Make"
							name="vehicle_make"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-2">
						<label>Model</label>
						<input
							type="text"
							className="form-control"
							placeholder="Model"
							name="vehicle_model"
							onChange={handleChange}
						/>
					</div>

					<div className="form-group my-2">
						<label>Year</label>
						<input
							type="text"
							className="form-control"
							placeholder="Year"
							name="vehicle_year"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-2">
						<label>Color</label>
						<input
							type="text"
							className="form-control"
							placeholder="Color"
							name="vehicle_color"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-2">
						<label>Plate Number</label>
						<input
							type="text"
							className="form-control"
							placeholder="Plate"
							name="vehicle_plate"
							onChange={handleChange}
						/>
					</div>
				</form>
				<Link to="/ClientHomePage">
					<button
						className="btn btn-warning btn-lg p-2 m-3"
						onClick={() => {
							addVehicle(newVehicle);
						}}>
						Add Vehicle
					</button>
				</Link>
				<Link to="/ClientHomePage">
					<button className="btn btn-warning btn-lg p-2 m-3">Home</button>
				</Link>
			</div>
		</div>
	);
};

AddVehicles.propTypes = {
	history: PropTypes.object
};
