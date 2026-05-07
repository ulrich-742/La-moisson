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

import Interface from "./Pages/Interface/Interface";
import Parcelles from "./Pages/Parcelles/Parcelles";
// import Meteo from "./Components/Pages/Meteo";
// import CoursGrains from "./Components/Pages/CoursGrains";
import Registre from "./Pages/RegistreRecolte/RegistreRecolte";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/interface", element: <Interface /> },
			{ path: "/parcelles", element: <Parcelles /> },
			// { path: "/meteo", element: <Meteo /> },
			// { path: "/cours-grains", element: <CoursGrains /> },
			{ path: "/registre", element: <Registre /> },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
