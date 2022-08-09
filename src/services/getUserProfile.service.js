import users from "../database";

const getUsersService = (userId) => {
    const user = users.find((user) => user.userId === userId)

    const profileUser = {
        name: user.name,
        email: user.email,
        isAdm: user.isAdm,
        userId,
        createdOn: user.createdOn,
        updatedOn: user.updatedOn,
    }

    if (!user) {
        return "Usuário não foi encontrado"
    }

    return profileUser
};

export default getUsersService;
