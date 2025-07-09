import UrlForm from "../components/UrlForm";

const HomePage = () => {
	return (
		<section className="w-full flex-center flex-col mt-10">
			<h1 className="head_text text-center">
				Linkly
				<br className="max-md:hidden" />
				<span className="blue_gradient text-center">
					Your Link, Just Shorter &amp; Smarter.
				</span>
			</h1>
			<p className="desc text-center">
				Streamline your links with our powerful, easy-to-use URL shortener.
				Whether you’re sharing on social media, tracking marketing campaigns, or
				just keeping things tidy, our tool gives you clean, customizable, and
				trackable links in seconds.
			</p>

			<div className="flex flex-col mt-10 justify-center items-center z-10">
				<UrlForm />
			</div>
		</section>
	);
};

export default HomePage;
