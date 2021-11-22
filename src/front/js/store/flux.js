const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loggedin: "",
			usersList: [
				{
					id: "1",
					type: "client",
					fullName: "Estela",
					email: "estela@gmail.com",
					password: "4564",
					phone: "123",
					rating: null
				},
				{
					id: "2",
					type: "trucker",
					fullName: "Juan",
					email: "juan@gmail.com",
					password: "49898",
					phone: "456",
					rating: [{ comments: "", thumbup: "" }, { comments: "", thumbup: "" }]
				}
			],
			loggedUser: {
				id: "",
				type: "",
				fullName: "",
				email: "",
				phone: ""
			},
			ratings: [],
			listOfVehicles: [
				{
					vehicleModel: "RAV4",
					vehicleMake: "Chevy",
					vehicleYear: "2015",
					vehicleType: "SUV"
				},
				{
					vehicleModel: "RAV4",
					vehicleMake: "Corvet",
					vehicleYear: "2015",
					vehicleType: "SUV"
				}
			],
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
			createUser: user => {
				let newList = getStore().usersList;
				newList.push(user);
				setStore({ usersList: newList });
			},
			addVehicle: vehicle => {
				let newList = getStore().listOfVehicles;
				newList.push(vehicle);
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
