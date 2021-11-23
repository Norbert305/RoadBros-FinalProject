import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarTrucker = () => {
	const { store } = useContext(Context);

	return (
		<Navbar bg="transparent" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="#home" className="fs-3" fontFamily="">
					RoadBros
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="m-auto position-absolute top-25 end-0 me-5">
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
