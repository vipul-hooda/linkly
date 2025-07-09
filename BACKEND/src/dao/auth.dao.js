import User from "../models/user.model.js";
import Urls from "../models/shortUrl.model.js";

export const findUserByEmail = async (email) => {
	return await User.findOne({ email });
};

export const findUserById = async (id) => {
	return await User.findById(id);
};

export const createUserWithEmail = async (name, email, password) => {
	const user = await findUserByEmail(email);
	if (user) return null;
	const newUser = new User({ name, email, password });
	await newUser.save();
	return newUser;
};

export const getUrlsById = async (_id) => {
	const urls = await Urls.find({ user: _id });
	return urls;
};
