import express from "express";
import { getMyUrls } from "../controller/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/urls", authMiddleware, getMyUrls);

export default router;
