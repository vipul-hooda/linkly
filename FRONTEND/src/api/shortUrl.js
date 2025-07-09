import axiosInstance from "../utils/axiosInstance";

export const createShortUrl = async (url, slug) => {
	const { data } = await axiosInstance.post("/api/create", {
		url,
		slug,
	});
	return data;
};

export const getMyUrls = async () => {
	const { data } = await axiosInstance.get(`/api/user/urls`);
	return data;
};

export const deleteUrl = async (id) => {
	await axiosInstance.post(`/delete/${id}`);
};
