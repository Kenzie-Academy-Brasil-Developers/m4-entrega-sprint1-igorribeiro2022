import users from "../database"

const verifyEmailMiddleware = (request, response, next) => {
    const { email } = request.body;

    const emailArealdyExists = users.find((user) => user.email === email);
    
    if (emailArealdyExists) {
      return response
        .status(400)
        .json({ message: "Esse email já está sendo usado!" });
    }
    
    next();
};

export default verifyEmailMiddleware;