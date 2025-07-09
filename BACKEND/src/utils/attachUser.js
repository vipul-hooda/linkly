import { findUserById } from "../dao/auth.dao.js";
import { verifyToken } from "./helper.js";

export const attachUser = async (req, res, next) => {
	const token = req.cookies.accessToken;
	if (!token) return next();
	try {
		const id = verifyToken(token);
		const user = await findUserById(id);
		if (!user) return next();
		req.user = user;
		next();
	} catch (error) {
		throw new Error(error);
	}
};
