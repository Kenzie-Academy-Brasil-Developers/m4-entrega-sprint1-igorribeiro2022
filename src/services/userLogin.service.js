import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs"

const userLoginService = async (email, password) => {
    const user = users.find((elem) => elem.email === email)
    
    if (!user) {
        return "Email ou password inválidos";
    }

    const compararPassword = await bcrypt.compare(password, user.password);
    
    if (!compararPassword) {
        return "Email ou password inválidos";
    }

    const token = jwt.sign({email: user.email, userId: user.userId, isAdm: user.isAdm}, "SECRET_KEY", {expiresIn: "24h"})

    return { token };
}

export default userLoginService;