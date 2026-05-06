import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";

import Home from "./Components/Pages/Home";
// import Moisson from "./assets/Components/Pages/Moisson";
// import Parcelles from "./assets/Components/Pages/Parcelles";
// import Meteo from "./assets/Components/Pages/Meteo";
// import CoursGrains from "./assets/Components/Pages/CoursGrains";
// import Registre from "./assets/Components/Pages/Registre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
    //   { path: "/moisson", element: <Moisson /> },
    //   { path: "/parcelles", element: <Parcelles /> },
    //   { path: "/meteo", element: <Meteo /> },
    //   { path: "/coursgrains", element: <CoursGrains /> },
    //   { path: "/registre", element: <Registre /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);