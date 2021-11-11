import React, { useContext } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";

//PAGES

import { navbarClient } from "./component/navbarClient";
import { navbarTrucker } from "./component/navbarTrucker";

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

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{store.userLogin == "client" ? <navbarClient /> : <navbarTrucker />}{" "}
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/SignUpPage">
							<SignUpPage />
						</Route>
						<Route exact path="/ClientLoginPage">
							<ClientLoginPage />
						</Route>
						<Route exact path="/ClientPayment">
							<ClientPayment />
						</Route>
						<Route exact path="/AddVehicles">
							<AddVehicles />
						</Route>
						<Route exact path="/ClientHomePage">
							<ClientHomePage />
						</Route>
						<Route exact path="/VehiclesList">
							<VehiclesList />
						</Route>
						<Route exact path="/ServiceHistory">
							<ServiceHistory />
						</Route>
						<Route exact path="/ServiceMenu">
							<ServiceMenu />
						</Route>
						<Route exact path="/AwaitingResponse">
							<AwaitingResponse />
						</Route>
						<Route exact path="/ClientMessages">
							<ClientMessages />
						</Route>
						<Route exact path="/ServiceCompleted">
							<ServiceCompleted />
						</Route>
						<Route exact path="/RatingPage">
							<RatingPage />
						</Route>

						<Route exact path="/TruckerLoginPage">
							<TruckerLoginPage />
						</Route>
						<Route exact path="/TruckerPayment">
							<TruckerPayment />
						</Route>
						<Route exact path="/TruckerHomePage">
							<TruckerHomePage />
						</Route>
						<Route exact path="/RequestsList">
							<RequestsList />
						</Route>
						<Route exact path="/TruckerMessages">
							<TruckerMessages />
						</Route>
						<Route exact path="/ManagingService">
							<ManagingService />
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
