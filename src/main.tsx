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

/* PAGES */
import Interface from "./Pages/Interface/Interface";
import Parcelles from "./Pages/Parcelles/Parcelles";
import CoursDesGrains from "./Pages/CoursDesGrains/CoursDesGrains";
import RegistreRecolte from "./Pages/RegistreRecolte/RegistreRecolte";

/* ROUTER */
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,

		children: [
			{
				path: "/",
				element: <Interface />,
			},

			{
				path: "/interface",
				element: <Interface />,
			},

			{
				path: "/parcelles",
				element: <Parcelles propsParcelles={[]} />,
			},

			{ path: "/registre", element: <RegistreRecolte /> },

			{
				path: "/cours-grains",
				element: <CoursDesGrains />,
			},
		],
	},
]);

/* RENDER */
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
