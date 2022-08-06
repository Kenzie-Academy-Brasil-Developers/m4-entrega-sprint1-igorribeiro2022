import deleteUserService from "../services/deleteUser.service.js";

const deleteUserController = (request, response) => {
    const { id } = request.params;
    const deletedUser = deleteUserService(id)
  
    return response.json(deletedUser);
  };
  
  export default deleteUserController;
  