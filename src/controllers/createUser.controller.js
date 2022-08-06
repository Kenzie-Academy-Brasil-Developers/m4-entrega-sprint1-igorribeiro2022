import createUserService from "../services/createUser.service";

async function createUserController(request, response) {
    const { email, nome, senha, isAdm } = request.body;

    const user = await createUserService(email, nome, senha, isAdm);

    return response.json(user);
}

export default createUserController;