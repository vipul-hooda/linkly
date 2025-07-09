import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	// avatar: {
	// 	type: String,
	// 	reqired: false,
	// },
});

UserSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 12);
	}
	next();
});

UserSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

UserSchema.set("toJSON", {
	transform: (doc, ret) => {
		delete ret.password;
		delete ret.__v;
		return ret;
	},
});

const User = mongoose.model("User", UserSchema);

export default User;
