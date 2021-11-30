import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarClient = () => {
	const { store } = useContext(Context);

	return (
		<Navbar className="" bg="dark" variant="dark" expand="lg">
			<Container className="md-mx-5 sm-mx-2">
				<Navbar.Brand className="fs-3">
					<Link to="/" className="name text-decoration-none text-white">
						RoadBros
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="m-auto position-absolute bg-dark top-25 end-0">
						<Link to="/ClientHomePage">
							<Button className="btn btn-outline-warning border-0 bg-transparent">Home</Button>
						</Link>
						<Link to="/ClientProfile">
							<Button className="btn btn-outline-warning border-0 bg-transparent">Profile</Button>
						</Link>
						<Link to="/ServiceMenu">
							<Button className="btn btn-outline-warning border-0 bg-transparent">Request Help</Button>
						</Link>
						<Link to="/VehiclesList">
							<Button className="btn btn-outline-warning border-0 bg-transparent">Vehicle List</Button>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
