import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ManagingService = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container py-4 px-3 text-center text-light fs-4 mt-3">
			<h1 className="my-5">Manage your Service</h1>
			<ul className="list-group position-relative">
				<div className="row my-3 d-flex justify-content-center">
					<div className="col-9 bg-light text-dark p-3 rounded-3">
						<div className="text-start">
							<h5 className="text-center mb-3">
								Thank you for helping others, here is the information about your client:
							</h5>
							{store.pushRequestInfo.map((item, index) => {
								return (
									<li
										className="list-group-item d-flex flex-column mx-1 mt-3 shadow-lg border border-warning border-4 rounded-3"
										key={index}>
										<p className="mx-2 m-1 text-start">
											<strong>Full Name:</strong> {item.client_name}
										</p>
										<p className="mx-2 m-1 text-start">
											<strong>Phone:</strong> {item.client_phone}
										</p>
										<p className="mx-2 m-1 text-start">
											<strong>Zip Code:</strong> {item.zip_code}
										</p>
										<p className="mx-2 m-1 text-start">
											<strong>Vehicle:</strong> {item.vehicle}
										</p>
										<p className="mx-2 m-1 mb-3 text-start">
											<strong>Service:</strong> {item.service}
										</p>
										<p className="mx-2 m-1 mb-3 text-start">
											<button
												type="button"
												className="btn btn-danger"
												onClick={() => actions.deleteRequest(item)}>
												Remove
											</button>
										</p>
									</li>
								);
							})}
						</div>
					</div>
					<Link to="/TruckerHomePage">
						<button className="btn btn-warning btn-lg p-2 m-3">End Service</button>
					</Link>
				</div>
			</ul>
		</div>
	);
};
