import users from "../database";

const deleteUserService = (id) => {
    const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return response.status(404).json("Usuário não encontrado");
  }

  users.splice(userIndex, 1);

  return "Usuário Excluído";
}

export default deleteUserService