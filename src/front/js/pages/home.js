import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-5">
			<h1>Welcome to RoadBros!</h1>
			<h5>
				<img
					src={
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthecardoctor.in%2Fwp-content%2Fuploads%2F2020%2F02%2FCarAssist512.png&f=1&nofb=1"
					}
					width="90vh"
				/>
			</h5>

			<h5 className="m-3">The app that helps you get road assistance near you!</h5>

			<h5 className="m-3">If you want to get help now, or become a trucker to help others, sign up now!</h5>

			<Link to="/SignUpPage">
				<button type="button" className="btn btn-warning m-4">
					Sign Up Now!
				</button>
			</Link>

			<h5>
				Already a memeber? <br /> Login!
			</h5>

			<Link to="/ClientLoginPage">
				<button type="button" className="btn btn-primary m-2">
					Client Login
				</button>
			</Link>

			<Link to="/TruckerLoginPage">
				<button type="button" className="btn btn-primary m-2">
					Trucker Login
				</button>
			</Link>
		</div>
	);
};
