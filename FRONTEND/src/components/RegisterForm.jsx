import { useState } from "react";
import { createUser } from "../api/auth.api";
import { Loader2 } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

const RegisterForm = ({ setType }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		if (password.length < 8) {
			setLoading(false);
			setError("Password must be at least 8 characters long.");
			return;
		}

		try {
			const data = await createUser(name, email, password);
			console.log(data);
			setLoading(false);
			navigate({ to: "/" });
		} catch (err) {
			setLoading(false);
			console.log(err);
			setError(err.response?.data.message);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-2xl font-medium">Create Account</h1>
			{error && (
				<div className="text-red-700 bg-red-100 mt-5 p-3 rounded-md">
					{error}
				</div>
			)}
			<form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
				<input
					type="text"
					placeholder="John Doe"
					className="auth_input"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
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
				<button type="submit" className="auth_button bg-blue-gradient">
					{loading ? (
						<>
							<Loader2 size={20} className="animate-spin" />
							&nbsp; Creating...
						</>
					) : (
						"Create Account"
					)}
				</button>
			</form>
			<p className="text-gray-700 text-sm mt-10">
				Already have an Account?{" "}
				<span
					onClick={() => setType("sign-in")}
					className="text-blue-500 cursor-pointer"
				>
					Sign In!
				</span>
			</p>
		</div>
	);
};

export default RegisterForm;
