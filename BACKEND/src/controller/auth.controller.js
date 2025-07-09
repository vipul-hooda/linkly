import {
	createUserService,
	loginUserService,
} from "../services/auth.service.js";
import { cookieOptions } from "../config/config.js";

export const createUser = async (req, res) => {
	const { name, email, password } = req.body;
	const { token, newUser } = await createUserService(name, email, password);

	req.user = newUser;
	res.cookie("accessToken", token, cookieOptions);
	res.status(201).json(token);
};

export const loginUser = async (req, res) => {
	const { email, password } = req.body;
	const { token, user } = await loginUserService(email, password);

	req.user = user;
	res.cookie("accessToken", token, cookieOptions);
	res.status(201).json(user, token);
};

export const logoutUser = async (req, res) => {
	res.clearCookie("accessToken");
	res.status(200).json({ message: "Logout successful" });
};

export const getUser = async (req, res) => {
	res.status(200).json(req.user);
};
