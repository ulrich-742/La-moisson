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

import Home from "./Components/Pages/Home";
import Interface from "./Components/Pages/InterfaceMoisson/Interface";
// import Parcelles from "./Components/Pages/Parcelles";
// import Meteo from "./Components/Pages/Meteo";
// import CoursGrains from "./Components/Pages/CoursGrains";
// import Registre from "./Components/Pages/Registre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/interface", element: <Home /> },
      { path: "/Interface", element: <Interface /> },
      // { path: "/parcelles", element: <Parcelles /> },
      // { path: "/meteo", element: <Meteo /> },
      // { path: "/cours-grains", element: <CoursGrains /> },
      // { path: "/registre", element: <Registre /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);