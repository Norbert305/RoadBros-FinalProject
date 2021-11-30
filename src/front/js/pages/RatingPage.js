import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const RatingPage = () => {
	const { store, actions } = useContext(Context);
	const [showUp, setShowUp] = useState(false);

	const handleCloseUp = () => setShowUp(false);
	const handleShowUp = () => setShowUp(true);

	const [showDown, setShowDown] = useState(false);

	const handleCloseDown = () => setShowDown(false);
	const handleShowDown = () => setShowDown(true);

	const [newRating, setnewRating] = useState({
		thumbUp: null,
		thumbDown: null,
		comments: null
	});

	const handleChange = e => setnewRating({ ...newRating, [e.target.name]: e.target.value });

	return (
		<div className="container py-4 px-3 text-center text-light fs-4">
			<h1 className="my-5">Thank You!</h1>
			<h5 className="m-3">How would you rate your experience with ___________ ?</h5>

			<div className="row justify-content-center my-3">
				<button
					type="button"
					className="btn btn-light bg-transparent border-0 col-2 text-center"
					onClick={handleShowUp}>
					<div className="col-1">
						<i className="fas fa-thumbs-up fa-4x text-light" />
					</div>
				</button>
				<Modal show={showUp} onHide={handleCloseUp}>
					<Modal.Header closeButton>
						<Modal.Title>Thanks for your feedback!</Modal.Title>
					</Modal.Header>
					<Modal.Body>Please fill out form bellow on how we can improve!</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleCloseUp} className="btn-warning">
							Close
						</Button>
					</Modal.Footer>
				</Modal>
				<div className="col-2" />
				<button
					type="button"
					className="btn btn-light bg-transparent border-0 col-2 text-center"
					onClick={handleShowDown}>
					<div className="col-1">
						<i className="fas fa-thumbs-down text-light fa-4x" />
					</div>
				</button>
				<Modal show={showDown} onHide={handleCloseDown}>
					<Modal.Header closeButton>
						<Modal.Title>Sorry for the inconvenience!</Modal.Title>
					</Modal.Header>
					<Modal.Body>Please feel free to fill out our form bellow.</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleCloseDown} className="btn-warning">
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>

			<div className="mt-5 p-3">
				<label htmlFor="exampleFormControlTextarea2" className="form-label">
					<h5>Use the field below to write additonal comments:</h5>
				</label>
				<textarea
					className="form-control"
					id="exampleFormControlTextarea2"
					rows="3"
					name="comments"
					onChange={handleChange}
				/>
			</div>

			<Link to="/ClientHomePage">
				<button
					className="btn btn-warning btn-lg p-2 m-3"
					/*
				onClick={() => {
					actions.addRating(newRating);
				}}
				*/
				>
					Send Rating
				</button>
			</Link>
		</div>
	);
};
