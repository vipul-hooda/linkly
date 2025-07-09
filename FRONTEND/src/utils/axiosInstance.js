import axios from "axios";

const errorHandler = (error) => {
	if (error.response.status === 404) {
		console.error("Resource not found:", error);
	} else if (error.response.status === 500) {
		console.error("Server error:", error);
	} else {
		console.error("Request failed:", error);
	}
	return Promise.reject(error);
};

const axiosInstance = axios.create({
	baseURL: "http://localhost:3000",
	timeout: 5000,
	withCredentials: true,
});

axiosInstance.interceptors.response.use({
	responseError: errorHandler,
});

export default axiosInstance;
