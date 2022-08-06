import users from "../database";
import jwt from "jsonwebtoken";

const getUsersService = (userId) => {
    const user = users.find(user => user.id === userId)
    
    if (!user) {
        return "Usuário não foi encontrado"
    }

    return user
};

export default getUsersService;
