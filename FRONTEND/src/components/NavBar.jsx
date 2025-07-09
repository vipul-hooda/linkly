import { useNavigate } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slice/authSlice";
import { logoutUser } from "../api/auth.api";
// import { Button } from "@/components/ui/button";

const NavBar = () => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		logoutUser();
		dispatch(logout());
		navigate({ to: "/auth" });
	};
	return (
		<div className="flex items-center justify-between gap-5 w-full  px-5 py-7">
			<div
				onClick={() => navigate({ to: "/" })}
				className="flex items-center cursor-pointer"
			>
				<img src="/assets/logo.svg" className="w-12" alt="logo" />
				<div className="font-medium text-2xl ml-2">Linkly</div>
			</div>
			<div className="flex items-center gap-4">
				{auth.isAuthenticated ? (
					<>
						<div className="flex items-center gap-4">
							<div className="text-2xl font-medium px-4 py-2 rounded-full cursor-pointer">
								Hello, {auth.user?.name} 👋🏻
							</div>
						</div>
						<div
							onClick={() => navigate({ to: "/dashboard" })}
							className="blue_button"
						>
							Dashboard
						</div>
						{/* <Button variant="outline">Button</Button> */}
						<div onClick={handleLogout} className="inverse_button">
							Logout
						</div>
					</>
				) : (
					<div
						onClick={() => navigate({ to: "/auth" })}
						className="blue_button"
					>
						Login
					</div>
				)}
			</div>
		</div>
	);
};

export default NavBar;
