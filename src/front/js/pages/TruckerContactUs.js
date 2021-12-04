import React from "react";
import { ContactUs } from "../component/contactForm";
import { NavbarClient } from "../component/NavbarClient";
import { Link } from "react-router-dom";

export const TruckerContactUs = () => {
	return (
		<>
			<div className="mb-4">
				<NavbarClient />
			</div>
			<h1 className="mt-5 pt-5">Contact Us</h1>
			<div className="mt-5">
				<ContactUs />
				<Link to="/TruckerHomePage">
					<button className="btn btn-warning btn-lg p-2 w-75 m-auto my-3">Back to Home</button>
				</Link>
			</div>
		</>
	);
};
