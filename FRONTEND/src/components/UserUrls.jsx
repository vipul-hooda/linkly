import { Loader2 } from "lucide-react";
import { deleteUrl, getMyUrls } from "../api/shortUrl.js";
import { useQuery } from "@tanstack/react-query";
import { FaCopy } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const UserUrls = () => {
	const {
		data: urls,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ["userUrls"],
		queryFn: () => getMyUrls(),
		refetchInterval: 500,
		staleTime: 0,
	});

	const handleCopy = (id) => {
		navigator.clipboard.writeText(`http://localhost:3000/${id}`);
	};

	const handleDelete = (id) => {
		deleteUrl(id);
	};

	if (isLoading)
		return (
			<>
				<Loader2 size={20} className="animate-spin" />
				&nbsp; Loading...
			</>
		);

	if (isError) return <h1>{error.message}</h1>;

	return (
		<>
			<div className="bg-white w-4xl px-10 pb-5 shadow-2xl my-5 rounded-2xl">
				<div className="flex justify-center items-center mt-7	 mb-3 font-bold text-2xl text-gray-700 ">
					<h1>Your URLs</h1>
				</div>
				<div className="overflow-x-auto">
					<table className="table-auto min-w-full divide-y divide-gray-400 w-full">
						<thead className="bg-gray-100 text-left text-md font-medium text-gray-700 uppercase tracking-wider">
							<tr>
								<th className="px-6 py-3">Full URL</th>
								<th className="px-6 py-3">Short URL</th>
								<th className="px-6 py-3 text-center">Clicks</th>
								<th className="px-6 py-3 text-center">Copy</th>
								<th className="px-6 py-3 text-center">Delete</th>
							</tr>
						</thead>
						<tbody>
							{urls.reverse().map((url) => (
								<tr key={url.shortId}>
									<td>{url.url}</td>
									<td className="text-blue-800 hover:text-blue-900 hover:underline">
										<a
											href={`http://localhost:3000/${url.shortId}`}
											target="_blank"
										>
											http://localhost:3000/{url.shortId}
										</a>
									</td>
									<td className="text-center">{url.clicks}</td>
									<td className="">
										<div
											className="ml-14 text-gray-500 cursor-pointer hover:text-gray-800 transition duration-300 py-1.5"
											onClick={() => handleCopy(url.shortId)}
										>
											<FaCopy />
										</div>
									</td>
									<td className="text-left">
										<div
											className="ml-14 text-red-600 hover:text-red-800 text-2xl cursor-pointer transition duration-300 py-1.5"
											onClick={() => handleDelete(url.shortId)}
										>
											<MdDeleteForever />
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default UserUrls;
