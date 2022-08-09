import users from "../database";

const deleteUserService = (userId) => {
    const userIndex = users.findIndex((user) => user.userId === userId);

  if (userIndex === -1) {
    return response.status(404).json("Usuário não encontrado");
  }

  users.splice(userIndex, 1);

  return "Usuário Excluído";
}

export default deleteUserService