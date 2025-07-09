import { getUrlsById } from "../dao/auth.dao.js";

export const getMyUrls = async (req, res) => {
	const { _id } = req.user;
	const urls = await getUrlsById(_id);
	res.status(200).json(urls);
};
