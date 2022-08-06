import getUserProfileService from "../services/getUserProfile.service.js";

const listUsersController = (request, response) => {
    const id = request.userId;

    const usersList = getUserProfileService(id);

  return response.json(usersList);
};

export default listUsersController;
