import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import shortUrl from "./src/routes/shortUrl.route.js";
import authRoutes from "./src/routes/auth.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import cors from "cors";
import { errorHandler } from "./src/utils/errorHandler.js";
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser";

dotenv.config("./.env");

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(attachUser);

app.use("/api/auth", authRoutes);
app.use("/api/create", shortUrl);
app.use("/api/user", userRoutes);
app.use("/", shortUrl);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
	connectDB();
	console.log(`Server is running at PORT ${process.env.PORT}`);
});
