import updateUserService from "../services/updateUser.service.js";

const updateUserController = (request, response) => {
    const { id } = request.params;
    const { nome ,email, senha, isAdm } = request.body;

    const userUpdate = updateUserService(nome ,email, senha, id, isAdm)
    return response.json(userUpdate);
}

export default updateUserController;