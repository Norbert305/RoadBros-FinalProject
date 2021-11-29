const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loggedin: "",
			loggedUser: {
				email: "paolasc2652@gmail.com",
				full_name: "Paola A Sanchez Carrero",
				id: 1,
				phone: "9549825249",
				rating: "null",
				request: [],
				user_type: "client",
				vehicle: []
			},
			ratings: [],
			listOfVehicles: [],
			listOfRequests: [
				{
					fullName: "Mariangel Estrada",
					zipCode: "33351",
					service: ["Towing Car: $30"],
					vehicle: "car 1"
				},
				{
					fullName: "Gloria Perez",
					zipCode: "66546",
					service: ["flat tire: $20"],
					vehicle: "car 2"
				}
			]
		},
		actions: {
			addRequest: request => {
				let newRequest = getStore().listOfRequests;
				newRequest.push(request);
				setStore({ listOfRequests: newRequest });
			},
			deleteRequest: request => {
				let newList = getStore().listOfVehicles;
				newList = newList.filter(item => request !== item);
				setStore({ listOfRequests: newList });
			},
			addVehicle: newList => {
				setStore({ listOfVehicles: newList });
			},
			deleteVehicle: vehicle => {
				let newList = getStore().listOfVehicles;
				newList = newList.filter(item => vehicle !== item);
				setStore({ listOfVehicles: newList });
			},
			changeUserType: type => {
				setStore({ userLogin: type });
			},
			login: userName => {
				setStore({ loggedin: userName });
			},
			logout: () => setStore({ loggedin: "" })
		}
	};
};

export default getState;
