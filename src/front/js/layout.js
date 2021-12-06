import React, { useContext, useState } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";

//PAGES

//Navbars
import { NavbarClient } from "./component/NavbarClient";
import { NavbarTrucker } from "./component/NavbarTrucker";

//Main Home Page
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";

//Client Pages
import { ClientContactUs } from "./pages/ClientContactUs";
import { ClientPayment } from "./pages/ClientPayment";
import { AddVehicles } from "./pages/AddVehicles";
import { ClientHomePage } from "./pages/ClientHomePage";
import { ClientProfile } from "./pages/ClientProfile";
import { ClientEditProfile } from "./pages/ClientEditProfile";
import { VehiclesList } from "./pages/VehiclesList";
import { ServiceHistory } from "./pages/ServiceHistory";
import { ServiceMenu } from "./pages/ServiceMenu";

import { ServiceCompleted } from "./pages/ServiceCompleted";
import { RatingPage } from "./pages/RatingPage";

//Trucker Pages
import { TruckerContactUs } from "./pages/TruckerContactUs";
import { TruckerPayment } from "./pages/TruckerPayment";
import { TruckerHomePage } from "./pages/TruckerHomePage";
import { TruckerProfile } from "./pages/TruckerProfile";
import { TruckerEditProfile } from "./pages/TruckerEditProfile";
import { RequestsList } from "./pages/RequestsList";
import { ManagingService } from "./pages/ManagingService";
import { TruckerServiceHistory } from "./pages/TruckerServiceHistory";

import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const { store, actions } = useContext(Context);

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/SignUpPage">
							<SignUpPage />
						</Route>
						<Route exact path="/LoginPage">
							<LoginPage />
						</Route>
						<Route exact path="/ClientPayment">
							<NavbarClient />
							<ClientPayment />
						</Route>
						<Route exact path="/AddVehicles">
							<NavbarClient />
							<AddVehicles />
						</Route>
						<Route exact path="/ClientHomePage">
							<NavbarClient />
							<ClientHomePage />
						</Route>
						<Route exact path="/ClientContactUs">
							<NavbarClient />
							<ClientContactUs />
						</Route>
						<Route exact path="/ClientProfile">
							<NavbarClient />
							<ClientProfile />
						</Route>
						<Route exact path="/ClientEditProfile">
							<NavbarClient />
							<ClientEditProfile />
						</Route>
						<Route exact path="/VehiclesList">
							<NavbarClient />
							<VehiclesList />
						</Route>
						<Route exact path="/ServiceHistory">
							<NavbarClient />
							<ServiceHistory />
						</Route>
						<Route exact path="/ServiceMenu">
							<NavbarClient />
							<ServiceMenu />
						</Route>
						<Route exact path="/ServiceCompleted">
							<NavbarClient />
							<ServiceCompleted />
						</Route>
						<Route exact path="/RatingPage">
							<NavbarClient />
							<RatingPage />
						</Route>

						<Route exact path="/TruckerPayment">
							<NavbarTrucker />
							<TruckerPayment />
						</Route>
						<Route exact path="/TruckerHomePage">
							<NavbarTrucker />
							<TruckerHomePage />
						</Route>
						<Route exact path="/TruckerProfile">
							<NavbarTrucker />
							<TruckerProfile />
						</Route>
						<Route exact path="/TruckerContactUs">
							<NavbarTrucker />
							<TruckerContactUs />
						</Route>
						<Route exact path="/TruckerEditProfile">
							<NavbarTrucker />
							<TruckerEditProfile />
						</Route>
						<Route exact path="/TruckerServiceHistory">
							<NavbarTrucker />
							<TruckerServiceHistory />
						</Route>
						<Route exact path="/RequestsList">
							<NavbarTrucker />
							<RequestsList />
						</Route>
						<Route exact path="/ManagingService">
							<NavbarTrucker />
							<ManagingService />
						</Route>

						<Route exact path="/navbarClient">
							<NavbarClient />
						</Route>
						<Route exact path="/navbarTrucker">
							<NavbarTrucker />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
