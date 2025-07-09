import { redirect, useNavigate } from "@tanstack/react-router";
import { getUser } from "../api/auth.api";
import { login } from "../store/slice/authSlice";

export const checkAuth = async ({ context }) => {
	// const navigate = useNavigate();
	try {
		const { store, queryClient } = context;
		const user = await queryClient.ensureQueryData({
			queryKey: ["currentUser"],
			queryFn: getUser,
		});
		if (!user) throw redirect({ to: "/auth" });
		store.dispatch(login(user));
		const auth = store.getState().auth;
		if (!auth.isAuthenticated) return true;
		return true;
	} catch (error) {
		return redirect({ to: "/auth" });
	}
};
