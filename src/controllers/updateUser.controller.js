import updateUserService from "../services/updateUser.service.js";

const updateUserController = async (request, response) => {
    try {
        const userId = request.userId;
        const data = request.body;

        const userUpdate = await updateUserService(data, userId);

        return response.json(userUpdate);

    } catch (error) {
        console.log(error);
    }
}

export default updateUserController;