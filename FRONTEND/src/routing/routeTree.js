import RootLayout from "../RootLayout";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard";
import { createRootRoute, createRoute } from "@tanstack/react-router";
import { checkAuth } from "../utils/helper";

export const rootRoute = createRootRoute({
	component: RootLayout,
});

const authRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/auth",
	component: AuthPage,
});

const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: HomePage,
});

const dashRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/dashboard",
	component: Dashboard,
	beforeLoad: checkAuth,
});

export const routeTree = rootRoute.addChildren([
	authRoute,
	homeRoute,
	dashRoute,
]);
