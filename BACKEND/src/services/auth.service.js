import { createUserWithEmail, findUserByEmail } from "../dao/auth.dao.js";
import { signToken } from "../utils/helper.js";

export const createUserService = async (name, email, password) => {
	const user = await findUserByEmail(email);
	if (user) throw new Error("User already exists");
	const newUser = await createUserWithEmail(name, email, password);
	const token = signToken({ id: newUser._id });
	return { token, newUser };
};

export const loginUserService = async (email, password) => {
	const user = await findUserByEmail(email);
	if (!user) throw new Error("Invalid Credentials");

	const isValid = await user.comparePassword(password);
	if (!isValid) throw new Error("Invalid Credentials");
	const token = signToken({ id: user._id });
	return { token, user };
};
