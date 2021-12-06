import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Tabs, Tab, Carousel, CarouselItem, Caption } from "react-bootstrap";
import { ContactUs } from "../component/contactForm";
import RoadBrosLogo from "../../img/RoadBrosLogo.png";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="bg-transparent">
			<nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong ">
				<div className="container-fluid ">
					<button
						id="menu-btn"
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
						<div className="navbar-nav fs-5">
							<a className="nav-link active" href="#aboutUs">
								About Us
							</a>
							<a className="nav-link active" href="#services">
								Services
							</a>
							<a className="nav-link active" href="#expansions">
								Expansions
							</a>
							<a className="nav-link active" href="#contact">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>

			<h1 className="welcome">Welcome to</h1>
			<span id="home-logo">
				{" "}
				<img
					alt=""
					src={RoadBrosLogo}
					width="200"
					height="200"
					className="home-logo d-inline-block align-top"
				/>
			</span>

			<div className="login-area row row-cols-1 row-cols-md-2 g-4 text-center mx-auto">
				<div id="nonUser-area" className="col mx-auto ">
					<div className="card">
						<p>
							<img
								src={
									"https://thumbs.dreamstime.com/b/tow-truck-road-sign-towing-truck-van-car-icon-isolated-white-background-tow-truck-road-sign-towing-truck-van-car-icon-186278673.jpg"
								}
								width="180vh"
							/>
						</p>
						<p>The app that helps you get road assistance near you!</p>
						<p>If you want to get help now, or become a trucker to help others, sign up now!</p>
						<div className="card-body">
							<Link to="/SignUpPage">
								<button type="button" className="btn btn-warning btn-lg">
									Sign Up Now!
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div id="signUp-area" className="col mx-auto">
					<div className="card">
						<div className=" card-body text-center">
							<div>
								<p>Already memeber? You can sign as...</p>
							</div>
							<div>
								<Link to="/LoginPage">
									<button type="button" id="trucker-btn" className="btn btn-warning btn-lg mb-5">
										Sign In
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<h2 className="AboutUsTitleCard" id="aboutUs">
				About us
			</h2>

			<div id="info-cards" className="container">
				<Tabs
					defaultActiveKey="Who We Are"
					id="uncontrolled-tab-example"
					className="mb-3 justify-content-center">
					<Tab eventKey="Who We Are" title="Who We Are">
						<p>
							<strong className="text-warning">We are</strong> an app based in{" "}
							<strong className="text-warning">Miami</strong> created in order to help people to{" "}
							<strong className="text-warning">help each other</strong>
						</p>
					</Tab>
					<Tab eventKey="Our Mission" title="Our Mission">
						<p>
							<strong className="text-warning">Create</strong> a healthy and safe environment in our{" "}
							<strong className="text-warning">Community</strong> in order to avoid accidents, incidents,
							and annoyances when having a problem with your car on the{" "}
							<strong className="text-warning">Road</strong>
						</p>
					</Tab>
				</Tabs>
			</div>

			<h2 className="servicesTitleCard" id="services">
				Services
			</h2>

			<div id="service-sliders" className="container">
				<Carousel className="carousel">
					<Carousel.Item interval={1000}>
						<Carousel.Caption>
							<h1>Flat Tire</h1>
						</Carousel.Caption>
						<img
							className="d-block w-100"
							src="https://media.istockphoto.com/photos/car-tire-with-a-flat-tire-in-the-yard-near-a-multistorey-building-of-picture-id1224593244?b=1&k=20&m=1224593244&s=170667a&w=0&h=4chACaKJDZczAsMcevys-_nlxExRE78Yi5GDmBvjbmY="
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item interval={1000}>
						<img
							className="d-block w-100"
							src="https://www.misterworker.com/it/img/cms/Mister%20Worker/ENG/Dead-car-battery.jpg"
							alt="Second slide"
						/>
						<Carousel.Caption>
							<h1>Dead Battery</h1>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={1000}>
						<img
							className="d-block w-100"
							src="https://cdn.hswstatic.com/gif/empty-gas.jpg"
							alt="Third slide"
						/>
						<Carousel.Caption>
							<h1>Empty Gas</h1>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={1000}>
						<img
							className="d-block w-100"
							src="https://grimmermotors.co.nz/wp-content/uploads/2017/06/jumpstarter.jpg"
							alt="Fourth slide"
						/>
						<Carousel.Caption>
							<h1>Jump Start</h1>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={1000}>
						<img
							className="d-block w-100"
							src="https://bramptonist.com/wp-content/uploads/2018/09/car-towing-brampton.jpg"
							alt="Fifth slide"
						/>
						<Carousel.Caption>
							<h1>Towing Car</h1>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>

			<h2 className="expansionsTitleCard" id="expansions">
				Futures Expansions
			</h2>

			<div className="container-fluid" id="future-expansion">
				<div className="card bounce-hover">
					<div className="row bounce-hover g-0">
						<div className="overflow col-md-6">
							<img
								src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?"
								className="img-fluid"
								alt="New York"
							/>
						</div>
						<div className="col-md-6">
							<div className="card-body text-center">
								<h1 className="card-title">New York</h1>
								<p className="card-text col-10 ps-5 ms-5">
									New York State population in 2021 is estimated to be 20.4 million and its fourth
									most populous US state.
									<br />
									In most urban areas 77% use a vehicle
								</p>
								<p className="card-text">
									<small className="text-muted">information extracted from newyork.gov</small>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="row g-0">
						<div className="col-md-6">
							<div className="card-body text-center">
								<h1 className="card-title">Chicago</h1>
								<p className="card-text text-center col-10 ps-5 ms-5">
									Chicago population in 2021 is estimated to be 8.8 million and its third most
									populous US cities.
									<br />
									In some areas it reaches up to 53% of vehicles per capita
								</p>
								<p className="card-text">
									<small className="text-muted">Information extracted from illinois.gov</small>
								</p>
							</div>
						</div>
						<div className="overflow col-md-6">
							<img
								src="https://media.timeout.com/images/105439616/630/472/image.jpg"
								className="img-fluid"
								alt="Chicago"
							/>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="row g-0">
						<div className="overflow col-md-6">
							<img
								src="https://wallpaperaccess.com/full/221112.jpg"
								className="img-fluid"
								alt="Los Angeles"
							/>
						</div>
						<div className="col-md-6">
							<div className="card-body text-center">
								<h1 className="card-title">Los Angeles</h1>
								<p className="card-text col-10 ps-5 ms-5">
									Los Angeles population in 2021 is estimated to be 10.1 million
									<br />
									In some areas it reaches up to 64% of vehicles per capita
								</p>
								<p className="card-text">
									<small className="text-muted">Iformation extracted from california.gov</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<h2 className="contactTitleCard" id="contact">
				Contact
			</h2>

			<ContactUs />

			<section className="social">
				<h2>Follow RoadBros</h2>
				<div className="links">
					<a href="#">
						<i className="fab fa-facebook-f" />
					</a>
					<a href="#">
						<i className="fab fa-twitter" />
					</a>
					<a href="#">
						<i className="fab fa-linkedin" />
					</a>
				</div>
			</section>

			<div className="footer-links">
				<div className="footer-container">
					<ul>
						<li>
							<a>
								<h3>Home</h3>
							</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
					</ul>
					<ul>
						<li>
							<a>
								<h3>Link</h3>
							</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
					</ul>
					<ul>
						<li>
							<a>
								<h3>Contact</h3>
							</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
					</ul>
					<ul>
						<li>
							<a>
								<h3>Services</h3>
							</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
						<li>
							<a>Blockchain</a>
						</li>
					</ul>
				</div>
			</div>

			<footer className="footer">
				<h3>
					RoadBros Copyrigth <i className="fa fa-registered" aria-hidden="true" />
				</h3>
			</footer>
		</div>
	);
};
