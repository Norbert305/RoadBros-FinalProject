const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			backEndUrl: "https://3001-pink-gazelle-jkabqel8.ws-us21.gitpod.io",
			loggedin: "",
			loggedUser: {},
			ratings: [],
			listOfVehicles: [],
			listOfRequests: []
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
				console.log(myNewRequest);
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
				console.log("new vehicle");
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
			logout: () => setStore({ loggedUser: null })
		}
	};
};

export default getState;
