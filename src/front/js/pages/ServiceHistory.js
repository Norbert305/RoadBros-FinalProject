import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ServiceHistory = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container p-4 text-center text-light fs-6 mt-3">
			<h1 className="text-center my-5">Service History</h1>
			<ul className="list-group position-relative">
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Trucker Name:</strong> Adam Foster
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Truck Ford F150 2021 Black ISDC88
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Empty Gas, Flat Tire
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> December 4, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Trucker Name:</strong> Paul George
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Sudan Camry Toyota 2021 Silver CSFX22
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Towing Car
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> December 1, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Trucker Name:</strong> John Smith
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Sudan Camry Toyota 2021 Silver CSFX22
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Dead Battery
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 28, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Trucker Name:</strong> Paul George
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Truck Ford F150 2021 Black ISDC88
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Empty Gas
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 26, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Trucker Name:</strong> Adam Foster
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Truck Ford F150 2021 Black ISDC88
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Towing Car, Empty Gas
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 24, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Trucker Name:</strong> Adam Foster
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Sudan Camry Toyota 2021 Silver CSFX22
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Towing Car, Dead Battery
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 21, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Trucker Name:</strong> John Smith
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Truck Ford F150 2021 Black ISDC88
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Empty Gas, Flat Tire
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 17, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Trucker Name:</strong> John Smith
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Sudan Camry Toyota 2021 Silver CSFX22
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Flat Tire
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 12, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Trucker Name:</strong> Enrique Salaz
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Sudan Camry Toyota 2021 Silver CSFX22
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Towing Car
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 8, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Trucker Name:</strong> Paul George
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Truck Ford F150 2021 Black ISDC88
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Empty Gas
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 5, 2021
					</p>
				</li>
			</ul>
			<Link to="/ClientHomePage">
				<button className="btn btn-warning btn-lg p-2 m-3">Home</button>
			</Link>
		</div>
	);
};
