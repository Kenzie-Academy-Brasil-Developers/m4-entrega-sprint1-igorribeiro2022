import getUsersService from "../services/getUsers.service.js";

const getUsersController = (request, response) => {
  const getUsers = getUsersService();

  return response.json(getUsers);
};

export default getUsersController;
