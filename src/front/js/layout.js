import React, { useContext } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";

//PAGES

import { navbarClient } from "./component/navbarClient";
import { navbarTrucker } from "./component/navbarTrucker";

import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";

import { ServiceMenu } from "./pages/ServiceMenu";
import { AddVehicles } from "./pages/AddVehicles";
import { VehiclesList } from "./pages/VehiclesList";
import { ServiceHistory } from "./pages/ServiceHistory";
import { PaymentPage } from "./pages/PaymentPage";

import { AwaitingResponse } from "./pages/AwaitingResponse";
import { MessagesPage } from "./pages/MessagesPage";
import { ServiceCompleted } from "./pages/ServiceCompleted";
import { RatingPage } from "./pages/RatingPage";

import { ClientHomePage } from "./pages/ClientHomePage";
import { TruckerHomePage } from "./pages/TruckerHomePage";

import { ClientRequests } from "./pages/ClientRequests";
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
					{store.userLogin == "client" ? <navbarClient /> : <navbarTrucker />}
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
						<Route exact path="/ServiceMenu">
							<ServiceMenu />
						</Route>
						<Route exact path="/PaymentPage">
							<PaymentPage />
						</Route>
						<Route exact path="/AwaitingResponse">
							<AwaitingResponse />
						</Route>
						<Route exact path="/MessagesPage">
							<MessagesPage />
						</Route>
						<Route exact path="/ServiceCompleted">
							<ServiceCompleted />
						</Route>
						<Route exact path="/RatingPage">
							<RatingPage />
						</Route>
						<Route exact path="/ClientHomePage">
							<ClientHomePage />
						</Route>
						<Route exact path="/TruckerHomePage">
							<TruckerHomePage />
						</Route>
						<Route exact path="/ClientRequests">
							<ClientRequests />
						</Route>
						<Route exact path="/ManagingService">
							<ManagingService />
						</Route>
						<Route exact path="/AddVehicles">
							<AddVehicles />
						</Route>
						<Route exact path="/ServiceHistory">
							<ServiceHistory />
						</Route>
						<Route exact path="/VehiclesList">
							<VehiclesList />
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
