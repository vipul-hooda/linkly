import { useState } from "react";
import { loginUser } from "../api/auth.api";
import { useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slice/authSlice";

const LoginForm = ({ type, setType }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const auth = useSelector((state) => state.auth);

	const handleSubmit = async (e) => {
		setLoading(true);
		setError("");
		e.preventDefault();
		try {
			const data = await loginUser(email, password);
			console.log(data);
			dispatch(login(data));
			navigate({ to: "/" });
			setLoading(false);
		} catch (err) {
			setLoading(false);
			setError(err.response?.data.message);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-2xl font-medium">Login</h1>
			{error && (
				<div className="text-red-700 bg-red-100 mt-5 p-3 rounded-md">
					{error}
				</div>
			)}
			<form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
				<input
					type="email"
					placeholder="Email"
					className="auth_input"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					className="auth_input"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				{/* <div className=""> */}
				<button type="submit" className="auth_button bg-blue-gradient">
					{loading ? (
						<>
							<Loader2 size={20} className="animate-spin" />
							&nbsp; Loading...
						</>
					) : (
						"Sign In"
					)}
				</button>
				{/* </div> */}
			</form>
			<p className="text-gray-700 text-sm mt-10">
				Don't Have an Account?{" "}
				<span
					onClick={() => setType("sign-up")}
					className="text-blue-600 cursor-pointer"
				>
					Create Account
				</span>
			</p>
		</div>
	);
};

export default LoginForm;
