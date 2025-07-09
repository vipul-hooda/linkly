import "./index.css";
import { createRoot } from "react-dom/client";
import store from "./store/store.js";
import { Provider } from "react-redux";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { routeTree } from "./routing/routeTree.js";

const queryClient = new QueryClient();

const router = createRouter({
	routeTree,
	context: {
		queryClient,
		store,
	},
});

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			{/* <TanStackRouterDevtools router={router} /> */}
		</QueryClientProvider>
	</Provider>
);
