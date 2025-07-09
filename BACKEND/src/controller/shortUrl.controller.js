import { createShortUrlService } from "../services/shortUrl.service.js";
import { getUrl, removeUrl } from "../dao/shortUrl.js";

export const createShortUrl = async (req, res) => {
	const { url, slug } = req.body;
	const userId = req.user?._id;
	const shortId = await createShortUrlService(url, userId, slug);
	res.send(process.env.SERVER_URL + shortId);
};

export const redirectToUrl = async (req, res) => {
	const { id } = req.params;
	const url = await getUrl(id);
	if (url) res.redirect(url);
	else res.status(404).send("URL not found");
};

export const deleteUrl = async (req, res) => {
	const { id } = req.params;
	const deleted = await removeUrl(id);

	console.log(deleted);
	if (deleted) res.status(200).send("URL deleted");
};
