import users from "../database";
import jwt from "jsonwebtoken";

const isAdmMiddleware = (request, response, next) => {
  try {
    let token = request.headers.authorization;

    if (!token) {
      return response
        .status(401)
        .json({ message: "Não Autorizado, faça login!" });
    }

    token = token.split(" ")[1];

    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
      if (error) {
        return response.status(401).json({ message: "Token inválido." });
      }
      const userId = request.userId;

      const user = users.find((user) => user.userId === userId);

      if (!user) {
        return response
          .status(401)
          .json({ message: "Usuário não encontrado!" });
      }

      if (!user.isAdm) {
        return response
          .status(401)
          .json({ message: "Não Autorizado. Somente administradores podem acessar essas informações!" });
      }

      next();
    });
  } catch (error) {
    console.log(error);
  }
};

export default isAdmMiddleware;