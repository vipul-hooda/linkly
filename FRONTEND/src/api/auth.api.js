import axiosInstance from "../utils/axiosInstance";

export const loginUser = async (email, password) => {
	const { data } = await axiosInstance.post("/api/auth/login", {
		email,
		password,
	});
	return data;
};

export const createUser = async (name, email, password) => {
	const { data } = await axiosInstance.post("/api/auth/register", {
		name,
		email,
		password,
	});
	return data;
};

export const logoutUser = async () => {
	await axiosInstance.post("/api/auth/logout");
};

export const getUser = async () => {
	const { data } = await axiosInstance.get("/api/auth/me");
	return data;
};
