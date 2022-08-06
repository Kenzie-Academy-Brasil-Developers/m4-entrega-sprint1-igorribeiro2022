import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

async function createUserService(email, nome, senha, isAdm) {
    const senhaCripto = await bcrypt.hash(senha, 10);

    const newUser = {
        nome,
        email,
        senha: senhaCripto,
        isAdm,
        id: uuidv4(),
    };

    users.push(newUser);

    return newUser;
};

export default createUserService;