import UrlSchema from "../models/shortUrl.model.js";

export const saveShortUrl = async (shortId, url, userId) => {
	const newUrl = new UrlSchema({
		shortId,
		url,
	});
	if (userId) {
		newUrl.user = userId;
	}
	newUrl.save();
	return newUrl.shortId;
};

export const getUrl = async (id) => {
	const { url } = await UrlSchema.findOneAndUpdate(
		{ shortId: id },
		{ $inc: { clicks: 1 } }
	);
	return url;
};

export const checkShortIdExists = async (shortId) => {
	const exists = await UrlSchema.findOne({ shortId });
	return exists;
};

export const removeUrl = async (id) => {
	const deleted = await UrlSchema.findOneAndDelete({ shortId: id });
	return deleted;
};
