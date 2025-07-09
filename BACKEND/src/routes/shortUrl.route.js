import express from "express";
import {
	createShortUrl,
	deleteUrl,
	redirectToUrl,
} from "../controller/shortUrl.controller.js";

const router = express.Router();

router.post("/", createShortUrl);
router.get("/:id", redirectToUrl);
router.post("/delete/:id", deleteUrl);

export default router;
