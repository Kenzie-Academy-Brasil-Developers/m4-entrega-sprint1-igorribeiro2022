import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs"

const userLoginService = (email, senha) => {
    const user = users.find((elem) => elem.email === email)
    
    if (!user) {
        return "Email ou senha inválidos";
    }

    const compararSenha = bcrypt.compareSync(senha, user.senha)
    
    if (!compararSenha) {
        return "Email ou senha inválidos";
    }

    const token = jwt.sign({email: user.email, id: user.id}, "SECRET_KEY", {expiresIn: "24h"})

    return token;
}

export default userLoginService;