import React, { useRef } from "react";
import emailjs from "emailjs-com";

export const ContactUs = () => {
	const form = useRef();

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
				className="form-control mx-auto w-50 mb-3 border-2 border-warning justify-content-center"
				placeholder="Subject"
				name="subject"
			/>
			<input
				type="text"
				className="form-control mx-auto w-50 mb-3 border-2 border-warning justify-content-center"
				placeholder="Name"
				name="user_name"
			/>
			<input
				type="email"
				className="form-control mx-auto w-50 mb-3 border-2 border-warning justify-content-center"
				placeholder="Email"
				name="user_email"
			/>
			<textarea
				className="form-control mx-auto w-50 mb-3 border-2 border-warning justify-content-center"
				placeholder="Message"
				name="message"
			/>
			<button type="submit" className="btn btn-warning btn-lg" value="Send Email">
				Send Email
			</button>
		</form>
	);
};
