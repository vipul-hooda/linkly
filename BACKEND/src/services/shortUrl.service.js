import { generateNanoId } from "../utils/helper.js";
import { checkShortIdExists, saveShortUrl } from "../dao/shortUrl.js";

export const createShortUrlService = async (url, userId, slug) => {
	const shortId = slug || generateNanoId(7);
	const exists = await checkShortIdExists(shortId);
	if (exists) throw new Error("Custom keyword already exists");
	if (!shortId) throw new Error("Something went wrong");
	return saveShortUrl(shortId, url, userId);
};
