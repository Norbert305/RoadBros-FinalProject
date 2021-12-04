import React, { useRef, useState, setShow } from "react";
import emailjs from "emailjs-com";
import { Modal, Button } from "react-bootstrap";

export const ContactUs = () => {
	const form = useRef();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const sendEmail = e => {
		e.preventDefault();

		emailjs.sendForm("gmail", "template_roadbros", form.current, "user_L95CSHiQ7sLNU3fffU7Qy").then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			},
			form.current.reset()
		);
	};

	return (
		<form className="" ref={form} onSubmit={sendEmail}>
			<input
				type="text"
				className="form-control mx-auto w-75 mx-5 mb-2 border-3 border-warning justify-content-center"
				placeholder="Subject"
				name="subject"
			/>
			<input
				type="text"
				className="form-control mx-auto w-75 mx-5 mb-2 border-3 border-warning justify-content-center"
				placeholder="Name"
				name="name"
			/>
			<input
				type="email"
				className="form-control mx-auto w-75 mx-5 mb-2 border-3 border-warning justify-content-center"
				placeholder="Email"
				name="email"
			/>
			<textarea
				className="form-control mx-auto w-75 mx-5 mb-5 border-3 border-warning justify-content-center"
				placeholder="Message"
				name="message"
			/>
			<button
				type="submit"
				className="btn btn-warning btn-lg p-2 w-75 m-auto my-3"
				value="Send Email"
				onClick={handleShow}>
				Send Email
			</button>

			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered className="text-center">
				<Modal.Body>Thanks for submiting your message, a representative will contact you shortly</Modal.Body>
				<Modal.Footer>
					<Button to="/ClientHomePage" className="m-auto" variant="warning" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</form>
	);
};
