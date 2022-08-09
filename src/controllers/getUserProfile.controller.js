import getUserProfileService from "../services/getUserProfile.service";

const getUserProfileController = (request, response) => {
    const id = request.userId;
    //console.log("Foooooi");

    const user = getUserProfileService(id);

    return response.json(user);
};

export default getUserProfileController;
