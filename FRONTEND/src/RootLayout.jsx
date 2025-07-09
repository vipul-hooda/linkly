import { Outlet } from "@tanstack/react-router";
import NavBar from "./components/NavBar";

const RootLayout = () => {
	return (
		<>
			<div className="main">
				<div className="gradient" />
			</div>
			<main className="app">
				<NavBar />
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
