import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const navbarTrucker = () => {
	const { store } = useContext(Context);

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="#home">RoadBros</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/TruckerHomePage">
							<Nav>Home</Nav>
						</Link>
						<Link to="/ClientRequests">
							<Nav>Requests List</Nav>
						</Link>
						<Link to="/MessagesPage">
							<Nav>Messages</Nav>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
