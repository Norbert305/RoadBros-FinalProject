import React, { useContext, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const StripeCheckoutButton = ({ price }) => {
	const { store, actions } = useContext(Context);
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51HlwtjGXJZUgwlNSdeEBhg8W2knXeFgTLf83YAoD0wRerIEtSBKgIHLHtSCo3JmVlMx81p8SYVGnDModssRkqVSW00LZavL8Xf";

	const onToken = token => {
		console.log(token);
		alert("Payment Successful");
		actions.changeMessage("empty");
	};
	return (
		<StripeCheckout
			label="Pay Trucker"
			name="RoadBros"
			billingAddress
			shippingAddress
			image=""
			description={`Your total is $ ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

StripeCheckoutButton.propTypes = {
	price: PropTypes.number
};
