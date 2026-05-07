import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import CoursDesGrains from "./Pages/CoursDesGrains/CoursDesGrains";

/* const parcellesData = [
    {
        id: 1,
        nom: "Champ du Nord",
        culture: "Blé",
        surface: 5.2,
        etat: "En croissance",
        maj: "1600-05-12",
    },
    {
        id: 2,
        nom: "Les Hauts",
        culture: "Orge",
        surface: 3.8,
        etat: "Semée",
        maj: "1600-05-10",
    },
    {
        id: 3,
        nom: "Le Colombier",
        culture: "Avoine",
        surface: 2.8,
        etat: "Semée",
        maj: "1600-05-08",
    },
    {
        id: 4,
        nom: "La Petite Plaine",
        culture: "Maïs",
        surface: 4.1,
        etat: "En croissance",
        maj: "1600-05-11",
    },
    {
        id: 5,
        nom: "Champ du Sud",
        culture: "Blé",
        surface: 6.0,
        etat: "Au repos",
        maj: "1600-05-05",
    },

    {
        id: 6,
        nom: "Les Vallons",
        culture: "Orge",
        surface: 3.5,
        etat: "Semée",
        maj: "1600-05-09",
    },
];
 */

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
