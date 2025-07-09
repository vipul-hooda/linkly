import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
	shortId: {
		type: String,
		required: true,
		unique: true,
		index: true,
	},
	url: {
		type: String,
		required: true,
	},
	clicks: {
		type: Number,
		default: 0,
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	slug: {
		type: String,
	},
});

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);

export default ShortUrl;
