import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const AuthPage = () => {
	const [type, setType] = useState("sign-in");
	return (
		<section className="w-full flex-center flex-col mt-7">
			{/* <h2 className="head_text text-center">Linkly</h2> */}
			<div className="flex flex-col mt-10 justify-center items-center z-10">
				<div className="flex items-center justify-center w-md bg-white h-auto shadow-2xl px-5 py-10 rounded-3xl">
					{type === "sign-in" ? (
						<LoginForm type={type} setType={setType} />
					) : (
						<RegisterForm setType={setType} />
					)}
				</div>
			</div>
		</section>
	);
};

export default AuthPage;
