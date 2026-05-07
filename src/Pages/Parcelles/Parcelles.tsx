import "./Parcelles.css";
import { useParcelles } from "../../Hooks/useParcelles";

export interface Parcelle {
	id: number;
	nom: string;
	culture_nom: string;
	surface: number;
	etat: string;
	derniere_maj: string;
}

function Parcelles() {
	const configColonnes = [
		{ id: "nom", label: "Nom" },
		{ id: "culture", label: "Culture" },
		{ id: "surface", label: "Surface" },
		{ id: "etat", label: "État" },
		{ id: "derniere_maj", label: "Dernière mise à jour" },
		{ id: "actions", label: "Actions" },
	];

	const etatClasses: Record<string, string> = {
		"En croissance": "green-class",
		Semée: "orange-class",
		"Au repos": "grey-class",
	};

	const { parcelles, loading } = useParcelles();
	if (loading) return <p>Chargement...</p>;

	return (
		<section className="parcelles-section-globale">
			<section className="parcelles-section-titles">
				<div className="parcelles-div-titles">
					<h2 className="heading--h2">Gestion des parcelles</h2>
					<p className="subheading parcelles-p-legende">
						Consultez et gérez toutes vos parcelles
					</p>
				</div>
				<button type="button" className="btn--primary btn-parcelle">
					+ Ajouter une parcelle
				</button>
			</section>

			<section className="parcelles-section-table-container">
				<div className="parcelles-div-table-header">
					{configColonnes.map((col) => (
						<div key={col.id} className="parcelles-div-table-row">
							{col.label}
						</div>
					))}
				</div>

				{parcelles.map((parcelle) => (
					<div key={parcelle.id} className="parcelles-div-infos">
						<p className="parcelles-div-p-infos">{parcelle.nom}</p>
						<p className="parcelles-div-p-infos">{parcelle.culture_nom}</p>
						<p className="parcelles-div-p-infos">
							{Number(parcelle.surface)} ha
						</p>
						<p className="parcelles-div-p-infos">
							<span className={etatClasses[parcelle.etat]}>
								{parcelle.etat}
							</span>
						</p>
						<p className="parcelles-div-p-infos">
							{new Date(parcelle.derniere_maj).toLocaleDateString("fr-FR")}
						</p>
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
			</section>
		</section>
	);
}

export default Parcelles;
