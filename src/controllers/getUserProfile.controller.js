import getUserProfileService from "../services/getUserProfile.service";

const getUserProfileController = (request, response) => {
    const id = request.userId;

    const user = getUserProfileService(id);

    return response.json(user);
};

export default getUserProfileController;
