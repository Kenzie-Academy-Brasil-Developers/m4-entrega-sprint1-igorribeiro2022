import deleteUserService from "../services/deleteUser.service.js";

const deleteUserController = async (request, response) => {
    const userId = request.userId;
    const deletedUser = await deleteUserService(userId)
  
    return response.json(deletedUser);
  };
  
  export default deleteUserController;
  