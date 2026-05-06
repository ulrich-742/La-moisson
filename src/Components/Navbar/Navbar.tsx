import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-left">
				<div className="logo">
					<span className="logo-icon">🌾</span>

					<div className="logo-text">
						<span className="title">LA MOISSON</span>

						<div className="logo-bottom">
							<span className="line"></span>
							<span className="year">1600</span>
							<span className="line"></span>
						</div>
					</div>
				</div>
			</div>

			<div className="navbar-center">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? "nav-item active" : "nav-item"
					}
				>
					 Accueil
				</NavLink>

				<NavLink
					to="/moisson"
					className={({ isActive }) =>
						isActive ? "nav-item active" : "nav-item"
					}
				>
					 La Moisson
				</NavLink>

				<NavLink
					to="/parcelles"
					className={({ isActive }) =>
						isActive ? "nav-item active" : "nav-item"
					}
				>
					 Parcelles
				</NavLink>

				<NavLink
					to="/meteo"
					className={({ isActive }) =>
						isActive ? "nav-item active" : "nav-item"
					}
				>
					 Météo
				</NavLink>

				<NavLink
					to="/cours-grains"
					className={({ isActive }) =>
						isActive ? "nav-item active" : "nav-item"
					}
				>
					 Cours des grains
				</NavLink>

				<NavLink
					to="/registre"
					className={({ isActive }) =>
						isActive ? "nav-item active" : "nav-item"
					}
				>
					 Registre de récolte
				</NavLink>

				<NavLink
					to="/conseils"
					className={({ isActive }) =>
						isActive ? "nav-item active" : "nav-item"
					}
				>
					 Conseils
				</NavLink>
			</div>
		</nav>
	);
}
