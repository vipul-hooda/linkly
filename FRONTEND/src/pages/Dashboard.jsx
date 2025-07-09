import UrlForm from "../components/UrlForm";
import UserUrls from "../components/UserUrls";

const Dashboard = () => {
	return (
		<section className="w-full flex-center flex-col mt-10">
			<div className="flex flex-col mt-10 justify-center items-center z-10">
				<UrlForm />
				<UserUrls />
			</div>
		</section>
	);
};

export default Dashboard;
