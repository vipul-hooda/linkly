import { useState } from "react";
import { useSelector } from "react-redux";

// Icons
import { FaCopy } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { createShortUrl } from "../api/shortUrl";

const UrlForm = () => {
	const [url, setUrl] = useState("");
	const [slug, setSlug] = useState("");
	const [shortUrl, setShortUrl] = useState("");
	const [isCopied, setIsCopied] = useState(false);
	const [error, setError] = useState(false);

	const auth = useSelector((state) => state.auth);

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const data = await createShortUrl(url, slug);
			setShortUrl(data);
			queryClient.invalidateQueries({ queryKey: ["userUrls"] });
		} catch (error) {
			setError(error.response?.data?.message);
		}
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(shortUrl);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	return (
		<div className="space-y-4 w-md">
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="url"
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						placeholder="Enter your URL"
						required
						className="w-full px-4 py-2 mt-2 mb-5 rounded-m search_input"
					/>
				</div>
				{auth.isAuthenticated && (
					<div>
						<input
							type="slug"
							value={slug}
							onChange={(e) => setSlug(e.target.value)}
							placeholder="Enter Custom Keyword (Optional)"
							className="m-auto max-w-xs px-4 py-2 mt-2 mb-5 rounded-m search_input"
						/>
					</div>
				)}
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-400 active:bg-blue-600 px-4 py-2 w-full text-white font-medium text-md rounded-md cursor-pointer "
				>
					Shorten URL
				</button>
			</form>
			{error && (
				<div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
					{error}
				</div>
			)}
			{shortUrl && (
				<div className="mt-6">
					<h2 className="text-lg font-semibold mb-2">Your Shortened URL:</h2>
					<div className="flex justify-between p-2 bprder border-gray-300 rounded-md bg-gray-200">
						<a href={shortUrl} target="_blank">
							{shortUrl}
						</a>
						<div
							className="py-1 text-gray-500 cursor-pointer hover:text-gray-800 transition duration-300"
							onClick={handleCopy}
						>
							{isCopied ? <IoMdDoneAll /> : <FaCopy />}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default UrlForm;
