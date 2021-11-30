import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarTrucker = () => {
	const { store } = useContext(Context);

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container className="md-mx-5 sm-mx-2">
				<Navbar.Brand className="fs-3">
					<Link to="/" className="name text-decoration-none text-white">
						RoadBros
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="m-auto position-absolute bg-dark top-25 end-0">
						<Link to="/TruckerHomePage">
							<Button className="btn btn-outline-warning border-0 bg-transparent">Home</Button>
						</Link>
						<Link to="/RequestsList">
							<Button className="btn btn-outline-warning border-0 bg-transparent">Request List</Button>
						</Link>
						<Link to="/TruckerMessages">
							<Button className="btn btn-outline-warning border-0 bg-transparent">Messages</Button>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
