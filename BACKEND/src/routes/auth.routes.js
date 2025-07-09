import express from "express";
import {
	createUser,
	getUser,
	loginUser,
	logoutUser,
} from "../controller/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", authMiddleware, getUser);

export default router;
