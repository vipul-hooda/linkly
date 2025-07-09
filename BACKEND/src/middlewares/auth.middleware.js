import { verifyToken } from "../utils/helper.js";
import { findUserById } from "../dao/auth.dao.js";

export const authMiddleware = async (req, res, next) => {
	const token = req.cookies?.accessToken;
	if (!token)
		return res.status(401).json({ success: false, message: "Unauthorized" });
	try {
		const id = verifyToken(token);
		const user = await findUserById(id);
		if (!user)
			return res.status(401).json({ success: false, message: "Unauthorized" });
		req.user = user;
		next();
	} catch (error) {
		throw new Error(error);
	}
};
