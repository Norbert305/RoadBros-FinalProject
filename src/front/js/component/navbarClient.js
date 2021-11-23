import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarClient = () => {
	const { store } = useContext(Context);

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand>RoadBros</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/ClientHomePage">
							<Nav className="px-2">Home</Nav>
						</Link>
						<Link to="/ServiceMenu">
							<Nav> Request Help</Nav>
						</Link>
						<Link to="/VehiclesList">
							<Nav>Vehicles List</Nav>
						</Link>
						<Link to="/ClientMessages">
							<Nav>Messages</Nav>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
