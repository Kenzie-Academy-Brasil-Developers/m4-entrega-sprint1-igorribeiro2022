import users from "../database";

const updateUserService = async (data, userId) => {

    const indexUser = users.findIndex((elem) => elem.userId === userId);

    if (indexUser === -1) {
        return "Usuário não encontrado!";
    }

    users[indexUser] = { ...users[indexUser], ...data };

    users[indexUser].updatedOn = new Date();
    return users[indexUser];
}

export default updateUserService;