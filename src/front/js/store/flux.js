const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			backEndUrl: "https://3001-red-fox-ulx9lx1n.ws-us21.gitpod.io",
			loggedin: "",
			loggedUser: {},
			message: "empty",
			listOfVehicles: [],
			listOfRequests: [],
			pushRequestInfo: []
		},
		actions: {
			getVehicles: () => {
				fetch(`${getStore().backEndUrl}/api/vehicle/user/1`)
					.then(response => response.json())
					.then(data => setStore({ listOfVehicles: data }))
					.catch(err => console.error("Error:", err));
			},
			getRequests: () => {
				fetch(`${getStore().backEndUrl}/api/request`)
					.then(response => response.json())
					.then(data => setStore({ listOfRequests: data }))
					.catch(err => console.error("Error:", err));
			},
			getUser: () => {
				fetch(`${getStore().backEndUrl}/api/user/1`)
					.then(response => response.json())
					.then(data => setStore({ loggedUser: data }))
					.catch(err => console.error("Error:", err));
			},
			updateProfile: updatedProfile => {
				fetch(`${getStore().backEndUrl}/api/user/1`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(updatedProfile)
				})
					.then(response => response.json())
					.then(data => setStore({ loggedUser: data }))
					.catch(err => console.error("Error:", err));
			},
			addRequest: (newVehicle, newService, newZipCode) => {
				let myNewRequest = {
					zip_code: newZipCode,
					service: newService,
					vehicle: newVehicle,
					user_id: getStore().loggedUser.id,
					client_name: getStore().loggedUser.full_name,
					client_phone: getStore().loggedUser.phone
				};

				fetch(`${getStore().backEndUrl}/api/request`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(myNewRequest)
				})
					.then(response => response.json())
					.then(data => setStore({ listOfRequests: data }))
					.catch(err => console.error("Error:", err));
			},
			addVehicle: myNewVehicle => {
				fetch(`${getStore().backEndUrl}/api/vehicle`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(myNewVehicle)
				})
					.then(response => response.json())
					.then(data => setStore({ listOfVehicles: data }))
					.catch(err => console.error("Error:", err));
			},
			deleteVehicles: id => {
				fetch(`${getStore().backEndUrl}/api/vehicle/${id}`, {
					method: "DELETE"
				})
					.then(response => response.json())
					.then(data => setStore({ listOfVehicles: data }))
					.catch(err => console.error("Error:", err));
			},
			changeUserType: type => {
				setStore({ userLogin: type });
			},
			login: email => {
				setStore({ loggedin: email });
				getActions().getUser();
			},
			logout: () => setStore({ loggedUser: null }),

			pushRequest: add => {
				let myNewRequestList = getStore().pushRequestInfo;
				if (!myNewRequestList.includes(add)) {
					myNewRequestList.push(add);
					setStore({ pushRequestInfo: myNewRequestList });
				}
			},

			deleteRequest: minus => {
				let favoriteRequest = getStore().pushRequestInfo;
				favoriteRequest = favoriteRequest.filter(item => minus !== item);
				setStore({ pushRequestInfo: favoriteRequest });
			},

			changeMessage: newMessage => {
				setStore({ message: newMessage });
			},

			filterByZip: zip => {
				let filterZip = getStore().listOfRequests;
				filterZip = filterZip.filter(item => zip !== item);
				setStore({ pushRequestInfo: favoriteRequest });
			}
		}
	};
};

export default getState;
