import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/600.css";
import "@fontsource/cinzel/700.css";
import "@fontsource/lora/400.css";
import "@fontsource/lora/400-italic.css";
import "@fontsource/lora/600.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import Home from "./pages/Home";
// import Moisson from "./pages/Moisson";
import Parcelles from "./pages/Parcelles";
// import Meteo from "./pages/Meteo";
// import CoursGrains from "./pages/CoursGrains";
// import Registre from "./pages/Registre";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			// { path: "/moisson", element: <Moisson /> },
			{ path: "/parcelles", element: <Parcelles /> },
			// { path: "/meteo", element: <Meteo /> },
			// { path: "/cours-grains", element: <CoursGrains /> },
			// { path: "/registre", element: <Registre /> },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
