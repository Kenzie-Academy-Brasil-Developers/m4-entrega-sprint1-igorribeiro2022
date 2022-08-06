import userLoginService from "../services/userLogin.service.js";

const userLoginController = (request, response) => {
    const { email, senha } = request.body;

    const userLogin = userLoginService(email, senha)

    return response.json(userLogin);
}

export default userLoginController;