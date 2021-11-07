import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MyNavbar = () => {
	const { store, actions } = useContext(Context);

	if (store.user.type == "Client") {
		return (
			<Navbar bg="dark" expand="lg" variant="dark">
				<Container>
					<Link to="/" style={{ textDecoration: "none" }}>
						<Navbar.Brand className="text-white fw-bold">RoadBros</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end text-end">
						<Nav>
							<NavDropdown title="Menu" id="basic-nav-dropdown" className="fw-bold">
								<Link to="/ClientHomePage" style={{ textDecoration: "none" }}>
									<NavDropdown.Item href="#action/3.1">Client Home Page</NavDropdown.Item>
								</Link>
								<Link to="/ServiceMenu" style={{ textDecoration: "none" }}>
									<NavDropdown.Item href="#action/3.2">Request help</NavDropdown.Item>
								</Link>
								<Link to="/VehiclesList" style={{ textDecoration: "none" }}>
									<NavDropdown.Item href="#action/3.3">Vehicles List</NavDropdown.Item>
								</Link>
								<Link to="/ServiceHistory" style={{ textDecoration: "none" }}>
									<NavDropdown.Item href="#action/3.4">Service History</NavDropdown.Item>
								</Link>
								<Link to="/Messages" style={{ textDecoration: "none" }}>
									<NavDropdown.Item href="#action/3.5">Messages</NavDropdown.Item>
								</Link>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	} else {
		return (
			<Navbar bg="dark" expand="lg" variant="dark">
				<Container>
					<Link to="/" style={{ textDecoration: "none" }}>
						<Navbar.Brand className="text-white fw-bold">RoadBros</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end text-end">
						<Nav>
							<NavDropdown title="Menu" id="basic-nav-dropdown" className="fw-bold">
								<Link to="/TruckerHomePage" style={{ textDecoration: "none" }}>
									<NavDropdown.Item href="#action/3.1">Home Page</NavDropdown.Item>
								</Link>
								<Link to="/ClientRequests" style={{ textDecoration: "none" }}>
									<NavDropdown.Item href="#action/3.2">Client Requests</NavDropdown.Item>
								</Link>
								<Link to="/MessagesPage" style={{ textDecoration: "none" }}>
									<NavDropdown.Item href="#action/3.3">Messages</NavDropdown.Item>
								</Link>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
};
