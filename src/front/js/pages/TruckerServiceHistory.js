import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const TruckerServiceHistory = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container p-4 text-center text-light fs-6 mt-3">
			<h1 className="text-center my-5">Service History</h1>
			<ul className="list-group position-relative">
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Client Name:</strong> Hedy Lamar
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> SUV Chevy Tahoe 2018 Black WBG914
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Flat Tire, Empty Gas
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> December 3, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Client Name:</strong> Rafa Morejon
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Hatchback Hyundai Elantra GT 2020 Black IBA098
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Jump Start, Flat Tire, Empty Gas
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> December 1, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Client Name:</strong> Alan Turin
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Sport BMW M4 2016 Orange ATE919
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Towing Car, Jump Start
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 29, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Client Name:</strong> Tony Stark
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Hyper Audi RS 2019 Red IMA722
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Flat Tire, Jump Start
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 24, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Client Name:</strong> Ada Lovelace
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Truck Ford F150 2015 Blue ADA815
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Dead Battery, Empty Gas, Towing Car
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 20, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Client Name:</strong> Jeff Bezos
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Sedan Honda Civic 2000 Grey JEF098
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Flat Tire, Jump Start
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 17, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Client Name:</strong> Norbert Seals
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Hyper Ferrari 450 2020 Red NSF305
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Empty Gas, Flat Tire
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 15, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Client Name:</strong> Elon Musk
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> Sedan Tesla X 2021 White EMT250
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Dead Battery, Jump Start
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 11, 2021
					</p>
				</li>
				<li className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3">
					<p className="mx-2 m-1 text-start">
						<strong>Client Name:</strong> Paola Sanchez
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Vehicle:</strong> SUV Toyota RAV4 2021 Red PST214
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Service:</strong> Flat Tire, Dead Battery
					</p>
					<p className="mx-2 m-1 text-start">
						<strong>Date:</strong> November 8, 2021
					</p>
				</li>
			</ul>
			<Link to="/TruckerHomePage">
				<button className="btn btn-warning btn-lg p-2 m-3">Home</button>
			</Link>
		</div>
	);
};
