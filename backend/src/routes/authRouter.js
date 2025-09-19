import { Router } from "express";
import { loginWithGoogle } from "../controllers/authController.js";
import { authMiddleWare } from "../middlewares/authMiddleware.js";

const authRouter = Router();
authRouter.post('/google', loginWithGoogle);

export default authRouter;