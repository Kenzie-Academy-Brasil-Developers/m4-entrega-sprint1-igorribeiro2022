import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
    const passwordCripto = await bcrypt.hash(password, 10);

    const newUser = {
        name,
        email,
        password: passwordCripto,
        isAdm,
        userId: uuidv4(),
        createdOn: `Usuário criado em ${new Date()}`,
        updatedOn: `Usuário atualizado em ${new Date()}`,
    };
    
    users.push(newUser);

    const newUserNoHash = {
        name,
        email,
        isAdm,
        userId: newUser.userId,
        createdOn: `Usuário criado em ${new Date()}`,
        updatedOn: `Usuário atualizado em ${new Date()}`,
    };

    return newUserNoHash;
};

export default createUserService;