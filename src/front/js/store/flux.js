const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
				id: "",
				type: "",
				fullName: "",
				picture: "",
				city: "",
				email: "",
				phone: "",
				licensePicture: "",
				RegistrationPicture: "",
				InsurancePicture: "",
				vehicleModel: "",
				vehicleMake: "",
				vehicleYear: "",
				rating: ""
			},
			userLogin: "client",
			addedVehicle: {
				vehicleModel: null,
				vehicleMake: null,
				vehicleYear: null,
				vehicleType: null
			},
			serviceRequest: {
				vehicle: null,
				service: null
			},
			rating: {
				thumbUp: null,
				thumbDown: null,
				comments: null
			},
			activeRequest: {
				picture:
					"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mycolombianwife.com%2Fwp-content%2Fuploads%2F2017%2F07%2Fhispanic-woman.png&f=1&nofb=1",
				fullName: "Mariangel Estrada",
				city: "Hialeah",
				service: "Towing Car",
				vehicleModel: "RAV4",
				vehicleMake: "Toyota",
				vehicleYear: "2015",
				vehicleType: "SUV"
			},
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
					picture:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mycolombianwife.com%2Fwp-content%2Fuploads%2F2017%2F07%2Fhispanic-woman.png&f=1&nofb=1",
					fullName: "Mariangel Estrada",
					city: "Hialeah",
					service: "Towing Car",
					vehicleModel: "RAV4",
					vehicleMake: "Toyota",
					vehicleYear: "2015",
					vehicleType: "SUV"
				},
				{
					picture:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fvertical-image-of-beautiful-hispanic-woman-picture-id529984590%3Fk%3D6%26m%3D529984590%26s%3D612x612%26w%3D0%26h%3DEVodp-KF9P7U4Hhe1Gx5mu_kWVoWd_paUSSmuakTpqw%3D&f=1&nofb=1",
					fullName: "Gloria Perez",
					city: "Miami",
					service: "Flat Tire",
					vehicleModel: "Corolla",
					vehicleMake: "Toyota",
					vehicleYear: "2017",
					vehicleType: "Car"
				},
				{
					picture:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fmature-hispanic-man-picture-id579165574%3Fk%3D6%26m%3D579165574%26s%3D170667a%26w%3D0%26h%3DgkWQe4pDe9IoXhHlWApHhNTgnT0GorgkDNX27XUjj-c%3D&f=1&nofb=1",
					fullName: "Hector Gomez",
					city: "Kendall",
					service: "Dead Battery",
					vehicleModel: "Odyssey",
					vehicleMake: "Honda",
					vehicleYear: "2018",
					vehicleType: "Van"
				}
			]
		},
		actions: {
			captureUserInfo: (type, fullName, email, phone, city) => {
				let user = getStore().user;
				user.type = type;
				user.fullName = fullName;
				user.email = email;
				user.phone = phone;
				user.city = city;
			},
			captureVehicleInfo: (vehicleModel, vehicleMake, vehicleYear, vehicleType) => {
				let vehicle = getStore().addedVehicle;
				vehicle.vehicleModel = vehicleModel;
				vehicle.vehicleMake = vehicleMake;
				vehicle.vehicleYear = vehicleYear;
				vehicle.vehicleType = vehicleType;
			},
			captureServiceRequest: (vehicle, service) => {
				let serviceRequest = getStore().serviceRequest;
				serviceRequest.vehicle = vehicle;
				serviceRequest.service = service;
			},
			captureRating: (thumbUp, thumbDown, comments) => {
				let rating = getStore().rating;
				rating.thumbUp = thumbUp;
				rating.thumbDown = thumbDown;
				rating.comments = comments;
			}
		}
	};
};

export default getState;
