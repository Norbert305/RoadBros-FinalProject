import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const AwaitingResponse = () => {
	const { store, actions } = useContext(Context);
	const [showUp, setShowUp] = useState(false);

	const handleCloseUp = () => setShowUp(false);
	const handleShowUp = () => setShowUp(true);

	const [showDown, setShowDown] = useState(false);

	return (
		<div className="container p-4 text-center text-light fs-6">
			<h1 className="my-5">Awaiting Response</h1>

			<div className="row spinner-border text-warning text-info m-3 spinnerSize" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>

			<div className="row m-3 d-flex justify-content-center">
				<div className="col">
					<button type="button" className="btn btn-warning btn-lg" onClick={handleShowUp}>
						Request Accepted by trucker
					</button>
				</div>

				<Modal show={showUp} onHide={handleCloseUp}>
					<Modal.Header closeButton>
						<Modal.Title>Congratulations!</Modal.Title>
					</Modal.Header>
					<Modal.Body>Your request has been accepted, click button below to text your trucker.</Modal.Body>
					<Modal.Footer>
						<Link to="/ClientMessages">
							<Button variant="secondary" className="btn btn-warning btn-lg fs-6">
								Go to Messages
							</Button>
						</Link>
					</Modal.Footer>
				</Modal>
			</div>
		</div>
	);
};
