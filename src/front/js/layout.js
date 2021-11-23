import React, { useContext, useState } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";

//PAGES

import { NavbarClient } from "./component/navbarClient";
import { NavbarTrucker } from "./component/navbarTrucker";

import { SignUpPage } from "./pages/SignUpPage";
import { ClientLoginPage } from "./pages/ClientLoginPage";
import { TruckerLoginPage } from "./pages/TruckerLoginPage";

import { ClientPayment } from "./pages/ClientPayment";
import { AddVehicles } from "./pages/AddVehicles";
import { ClientHomePage } from "./pages/ClientHomePage";
import { VehiclesList } from "./pages/VehiclesList";
import { ServiceHistory } from "./pages/ServiceHistory";
import { ServiceMenu } from "./pages/ServiceMenu";
import { AwaitingResponse } from "./pages/AwaitingResponse";
import { ClientMessages } from "./pages/ClientMessages";
import { ServiceCompleted } from "./pages/ServiceCompleted";
import { RatingPage } from "./pages/RatingPage";

import { TruckerPayment } from "./pages/TruckerPayment";
import { TruckerHomePage } from "./pages/TruckerHomePage";
import { RequestsList } from "./pages/RequestsList";
import { TruckerMessages } from "./pages/TruckerMessages";
import { ManagingService } from "./pages/ManagingService";

import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const { store, actions } = useContext(Context);

	const [userLogin, setUserLogin] = useState("");

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
						<Route exact path="/ClientLoginPage" setUserLogin={setUserLogin}>
							<ClientLoginPage />
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
						<Route exact path="/AwaitingResponse">
							<NavbarClient />
							<AwaitingResponse />
						</Route>
						<Route exact path="/ClientMessages">
							<NavbarClient />
							<ClientMessages />
						</Route>
						<Route exact path="/ServiceCompleted">
							<NavbarClient />
							<ServiceCompleted />
						</Route>
						<Route exact path="/RatingPage">
							<NavbarClient />
							<RatingPage />
						</Route>

						<Route exact path="/TruckerLoginPage" setUserLogin={setUserLogin}>
							<TruckerLoginPage />
						</Route>
						<Route exact path="/TruckerPayment">
							<NavbarTrucker />
							<TruckerPayment />
						</Route>
						<Route exact path="/TruckerHomePage">
							<NavbarTrucker />
							<TruckerHomePage />
						</Route>
						<Route exact path="/RequestsList">
							<NavbarTrucker />
							<RequestsList />
						</Route>
						<Route exact path="/TruckerMessages">
							<NavbarTrucker />
							<TruckerMessages />
						</Route>
						<Route exact path="/ManagingService">
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
