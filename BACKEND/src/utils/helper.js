import { nanoid } from "nanoid";
import jsonwebtoken from "jsonwebtoken";

export const generateNanoId = (len) => {
	return nanoid(len);
};

export const signToken = (payload) => {
	return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
		expiresIn: "30m",
	});
};

export const verifyToken = (token) => {
	const { id } = jsonwebtoken.verify(token, process.env.JWT_SECRET);
	return id;
};
