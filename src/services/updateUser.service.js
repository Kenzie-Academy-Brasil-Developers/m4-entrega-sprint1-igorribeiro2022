import users from "../database";
import * as bcrypt from "bcryptjs";

const updateUserService = async (nome, email, senha, id, isAdm) => {
    const senhaCripto = await bcrypt.hash(senha, 10);

    const usuarioAtualizado = {
        nome,
        email, 
        senha: senhaCripto,
        isAdm,
        id,
    }

    const indexUser = users.findIndex((elem) => elem.id === id);

    if (indexUser === -1) {
        return "Usuário não encontrado!";
    }

    users[indexUser] = { ...users[indexUser], ...usuarioAtualizado };

    return users[indexUser];
}

export default updateUserService;