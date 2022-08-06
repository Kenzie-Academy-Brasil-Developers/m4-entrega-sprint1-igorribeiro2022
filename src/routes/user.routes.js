import { Router } from "express";
import createUserController from "../controllers/createUser.controller.js";
import userLoginController from "../controllers/userLogin.controller.js";
import getUsersController from "../controllers/getUsers.controller.js";
import getUserProfileController from "../controllers/getUserProfile.controller.js";
import updateUserController from "../controllers/updateUser.controller.js";
import deleteUserController from "../controllers/deleteUser.controller.js";


import verifyAuthTokenMiddleware from "../middleware/verifyAuthToken.middleware.js";
import verifyEmailMiddleware from "../middleware/verifyEmail.middleware.js";
import isAdmMiddleware from "../middleware/isAdm.middleware.js";

const router = Router();

router.post("", verifyEmailMiddleware, createUserController);
router.post("/login", userLoginController);
router.get("/:id", verifyAuthTokenMiddleware, isAdmMiddleware, getUsersController);
router.get("/profile", verifyAuthTokenMiddleware, getUserProfileController);
router.patch("/:id", verifyAuthTokenMiddleware, updateUserController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);

export default router;