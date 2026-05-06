import "./Parcelles.css";
import { useParcelles } from "../../hooks/useParcelles";

export interface Parcelle {
	id: number;
	nom: string;
	culture: string;
	surface: number;
	etat: string;
	derniere_maj: string;
}

/* interface ParcelleProps {
	propsParcelles: Parcelle[];
} */
function Parcelles() {
	const configColonnes = [
		{ id: "nom", label: "Nom" },
		{ id: "culture", label: "Culture" },
		{ id: "surface", label: "Surface" },
		{ id: "etat", label: "État" },
		{ id: "derniere_maj", label: "Dernière mise à jour" },
		{ id: "actions", label: "Actions" },
	];

	const { parcelles, loading } = useParcelles();
	if (loading) return <p>Chargement...</p>;

	return (
		<>
			<h2 className="heading--h2">Gestion des parcelles</h2>
			<p className="subheading parcelles-p-legende">
				Consultez et gérez toutes vos parcelles
			</p>
			<button type="button" className="btn--primary btn-parcelle">
				+ Ajouter une parcelle
			</button>
			<div className="parcelles-div-table-container">
				{/* LA LIGNE DES TITRES */}
				<div className="parcelles-div-table-header">
					{configColonnes.map((col) => (
						<div key={col.id} className="parcelles-div-table-row">
							{col.label}
						</div>
					))}
				</div>

				{/* LES LIGNES DE DONNÉES */}
				{parcelles.map((parcelle) => (
					<div key={parcelle.id} className="parcelles-div-infos">
						<p className="parcelles-div-p-infos">{parcelle.nom}</p>
						<p className="parcelles-div-p-infos">{parcelle.culture}</p>
						<p className="parcelles-div-p-infos">{parcelle.surface}</p>
						<p className="parcelles-div-p-infos">{parcelle.etat}</p>
						<p className="parcelles-div-p-infos">{parcelle.derniere_maj}</p>
						<div className="parcelles-div-div-actions">
							<button type="button" className="parcelles-div-button">
								✏️
							</button>
							<button type="button" className="parcelles-div-button">
								🗑️
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default Parcelles;

// map les <p>clé</p>
