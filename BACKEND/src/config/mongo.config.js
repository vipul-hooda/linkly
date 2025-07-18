import mongoose from "mongoose";

let isConnected = false; // track the connection

const connectDB = async () => {
	mongoose.set("strictQuery", true);

	if (isConnected) {
		console.log("Mongodb is already connected");
		return;
	}

	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			dbName: "linkly",
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		isConnected = true;
		console.log("Mongodb connected");
	} catch (error) {
		console.log(error);
	}
};

export default connectDB;
