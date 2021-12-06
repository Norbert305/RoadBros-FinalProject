import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StarRating } from "../component/starRating";
import "../../styles/demo.scss";
import { Modal, Button } from "react-bootstrap";

export const RatingPage = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="container py-4 px-3 text-center text-light fs-4 mt-3">
			<h1 className="my-5">Thank You!</h1>
			<h5 className="m-3">How would you rate your experience?</h5>

			<div className="row justify-content-center my-3" />
			<StarRating />
			<div>
				<textarea className="form-control w-75 m-auto my-3" placeholder="Comments" />
			</div>
			<button
				type="submit"
				className="btn btn-warning btn-lg p-2 w-75 m-auto my-3"
				value="Send Rating"
				onClick={handleShow}>
				Send Rating
			</button>
			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered className="text-center">
				<Modal.Body>Thanks for submiting your Rating, We appreaciate you feedback.</Modal.Body>
				<Modal.Footer>
					<Link to="/ClientHomePage" className="m-auto">
						<Button variant="warning" onClick={handleClose}>
							Close
						</Button>
					</Link>
				</Modal.Footer>
			</Modal>
			<Link to="/ClientHomePage">
				<button className="btn btn-warning btn-lg p-2 w-75 m-auto my-3">Back to Home</button>
			</Link>
		</div>
	);
};
