import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
				<div className="container-fluid">
					<button
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

			<h1>Welcome to RoadBros rafa</h1>

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
								<button type="button" className="btn btn-warning btn-lg mt-3">
									Sign Up Now!
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div id="signUp-area" className="col mx-auto">
					<div className="card">
						<div className="card-body text-center">
							<div className="col-12 pt-5 mb-5">
								<p>
									Already memeber?
									<br />
									You can sign as...
								</p>
							</div>
							<Link to="/ClientLoginPage">
								<button type="button" className="btn btn-warning btn-lg col-10 mb-3">
									Client
								</button>
							</Link>
							<p className="or">or</p>
							<Link to="/TruckerLoginPage">
								<button type="button" className="btn btn-warning btn-lg col-10 mt-3 mb-5">
									Trucker
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<h2 className="AboutUsTitleCard" id="aboutUs">
				About us
			</h2>

			<div id="info-cards" className="info-cards container">
				<nav className="nav nav-pills mb-3 justify-content-center" id="tab" role="tablist">
					<li className="nav-item" role="presentation">
						<button
							className="nav-link active"
							id="home-tab"
							data-bs-toggle="tab"
							data-bs-target="#home"
							type="button"
							role="tab"
							aria-controls="home"
							aria-selected="true">
							Home
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="profile-tab"
							data-bs-toggle="tab"
							data-bs-target="#profile"
							type="button"
							role="tab"
							aria-controls="profile"
							aria-selected="false">
							Profile
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="contact-tab"
							data-bs-toggle="tab"
							data-bs-target="#contact"
							type="button"
							role="tab"
							aria-controls="contact"
							aria-selected="false">
							Contact
						</button>
					</li>
				</nav>
				<div className="tab-content" id="tabContent">
					<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
						Home Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book. It has survived not only five centuries, but
						also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
						in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
						recently with desktop publishing software like Aldus PageMaker including versions of Lorem
						Ipsum.
					</div>
					<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
						Profile Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
						been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
						galley of type and scrambled it to make a type specimen book. It has survived not only five
						centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
						was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
						passages, and more recently with desktop publishing software like Aldus PageMaker including
						versions of Lorem Ipsum.
					</div>
					<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
						Contact Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
						been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
						galley of type and scrambled it to make a type specimen book. It has survived not only five
						centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
						was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
						passages, and more recently with desktop publishing software like Aldus PageMaker including
						versions of Lorem Ipsum.
					</div>
				</div>
			</div>

			<h2 className="servicesTitleCard" id="services">
				Services
			</h2>

			<div id="service-sliders" className="container">
				<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselExampleInterval"
							data-bs-slide-to="0"
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleInterval"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleInterval"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						/>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active" data-bs-interval="1000">
							<img src="https://wallpapercave.com/wp/wp2150816.jpg" className="d-block w-100" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<h1>First slide label</h1>
								<p>Some representative placeholder content for the first slide.</p>
							</div>
						</div>
						<div className="carousel-item" data-bs-interval="1000">
							<img src="https://wallpapercave.com/wp/wp2150816.jpg" className="d-block w-100" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<h1>Second slide label</h1>
								<p>Some representative placeholder content for the second slide.</p>
							</div>
						</div>
						<div className="carousel-item" data-bs-interval="1000">
							<img src="https://wallpapercave.com/wp/wp2150816.jpg" className="d-block w-100" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<h1>Third slide label</h1>
								<p>Some representative placeholder content for the third slide.</p>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="visually-hidden">Next</span>
					</button>
				</div>
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
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
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
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
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
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<h2 className="contactTitleCard" id="contact">
				Contact
			</h2>

			<div className="contact container">
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="FullName"
						aria-label="FullName"
						aria-describedby="basic-addon1"
					/>
				</div>

				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="User Email"
						aria-label="User Email"
						aria-describedby="basic-addon2"
					/>
					<span className="input-group-text" id="basic-addon2">
						@example.com
					</span>
				</div>

				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Subject" aria-label="Subject" />
				</div>

				<div className="input-group">
					<span className="input-group-text">Your Message</span>
					<textarea className="form-control" aria-label="With textarea" />
				</div>
			</div>

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
		</>
	);
};
