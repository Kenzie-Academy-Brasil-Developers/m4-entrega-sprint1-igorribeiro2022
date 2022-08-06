import users from "../database";

    const isAdmMiddleware = (request, response, next) => {
      const { id } = request.params;
      const token = request.headers.authorization;

      if (!token) {
        return response
          .status(401)
          .json({ message: "Não Autorizado, faça login!" });
      }
      const indexUser = users.findIndex((elem) => elem.id === id);

      if (indexUser === -1) {
        return "Usuário não encontrado!"
      }

      if (indexUser.isAdm === false) {
        return response
          .status(401)
          .json({ message: "Não Autorizado. Somente administradores podem acessar essas informações!" });
      }

      next();
      
    };

    export default isAdmMiddleware;