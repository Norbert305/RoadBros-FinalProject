import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Welcome to RoadBros! Seals</h1>
			<p>
				<img
					src={
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthecardoctor.in%2Fwp-content%2Fuploads%2F2020%2F02%2FCarAssist512.png&f=1&nofb=1"
					}
					width="90vh"
				/>
			</p>

			<p>The app that helps you get road assistance near you!</p>
			<p>If you want to get help now, or become a trucker to help others, sign up now!</p>
			<Link to="/SignUpPage">
				<button type="button" className="btn btn-warning">
					Sign Up Now!
				</button>
			</Link>
			<div className="row justify-content-center p-3">
				<div className="col-2">
					<p>
						Already a memeber? <br /> Login!
					</p>
				</div>
				<div className="col-2">
					<Link to="/LoginPage">
						<button type="button" className="btn btn-primary">
							Login
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
