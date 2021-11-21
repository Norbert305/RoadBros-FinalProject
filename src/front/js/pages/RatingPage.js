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
		<div className="container pt-5 text-center text-light fs-4">
			<h1 className="mb-4">Thank You!</h1>
			<h5 className="m-5">How would you rate your experience with ___________ ?</h5>

			<div className="row justify-content-center m-3 ">
				<button type="button" className="btn btn-light col" onClick={handleShowUp}>
					<div className="col">
						<i className="fas fa-thumbs-up fa-4x" />
					</div>
				</button>
				<Modal show={showUp} onHide={handleCloseUp}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Thanks for your feedback! Please fill out form bellow on how we can improve!
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleCloseUp} className="btn-warning">
							Close
						</Button>
						<Button variant="primary" onClick={handleCloseUp}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
				<button type="button" className="btn btn-light col" onClick={handleShowDown}>
					<div className="col">
						<i className="fas fa-thumbs-down fa-4x" />
					</div>
				</button>
				<Modal show={showDown} onHide={handleCloseDown}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Sorry for the inconvenience! Please feel free to fill out our form bellow.</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleCloseDown} className="btn-warning">
							Close
						</Button>
						<Button variant="primary" onClick={handleCloseDown}>
							Save Changes
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
					className="btn btn-warning btn-lg mt-4"
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
