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

import Home from "./components/Pages/Home";
// import Moisson from "./Components/Pages/Moisson";
// import Parcelles from "./Components/Pages/Parcelles";
// import Meteo from "./Components/Pages/Meteo";
// import CoursGrains from "./Components/Pages/CoursGrains";
import RegistreRecolte from "./components/RegistreRecolte/RegistreRecolte";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			// { path: "/moisson", element: <Moisson /> },
			// { path: "/parcelles", element: <Parcelles /> },
			// { path: "/meteo", element: <Meteo /> },
			// { path: "/cours-grains", element: <CoursGrains /> },
			{ path: "/registre", element: <RegistreRecolte /> },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
