import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RoadBrosLogoPhoneView from "../../img/RoadBrosLogoPhoneView.png";

export const NavbarTrucker = () => {
	const { store } = useContext(Context);

	return (
		<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
			<Container className="md-mx-5 sm-mx-2">
				<Navbar.Brand className="fs-4">
					<Link to="/" className="name text-decoration-none text-white">
						<img
							alt=""
							src={RoadBrosLogoPhoneView}
							width="50"
							height="50"
							className="d-inline-block align-top"
						/>
						<h3>RoadBros</h3>
					</Link>
				</Navbar.Brand>
				<Navbar.Brand className="fs-3">
					{" "}
					<img
						alt=""
						src="https://duckduckgo.com/?q=car+icon&atb=v289-1&iax=images&ia=images&iai=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F564%2F515%2Foriginal%2Fcar-icon-vector.jpg"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{" "}
					RoadBros
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 d-inline-block" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="m-auto position-absolute bg-dark top-25 end-0" style={{ zIndex: "100" }}>
						<Link to="/TruckerHomePage">
							<Button className="btn btn-outline-warning border-0 bg-transparent">Home</Button>
						</Link>
						<Link to="/RequestsList">
							<Button className="btn btn-outline-warning border-0 bg-transparent">Requests List</Button>
						</Link>
						<Link to="/TruckerProfile">
							<Button className="btn btn-outline-warning border-0 bg-transparent">Profile</Button>
						</Link>
						<Link to="/">
							<Button className="btn btn-outline-warning border-0 bg-transparent">Log Out</Button>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
