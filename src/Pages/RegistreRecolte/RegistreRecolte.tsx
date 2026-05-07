import { useState } from "react";
import { useRecoltes } from "../../Hooks/useRecoltes";
import { createRecolte } from "../../Services/api";
import "./RegistreRecolte.css";

const RegistreRecolte = () => {
	const { recoltes, loading, refresh } = useRecoltes();
	const [showForm, setShowForm] = useState(false);
	const [form, setForm] = useState({
		date_recolte: "",
		parcelle_id: "",
		culture_id: "",
		quantite: "",
		rendement: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async () => {
		await createRecolte({
			date_recolte: form.date_recolte,
			parcelle_id: Number(form.parcelle_id),
			culture_id: Number(form.culture_id),
			quantite: Number(form.quantite),
			rendement: Number(form.rendement),
		});
		setShowForm(false);
		setForm({
			date_recolte: "",
			parcelle_id: "",
			culture_id: "",
			quantite: "",
			rendement: "",
		});
		refresh();
	};

	if (loading) return <p>Chargement...</p>;

	const configColonnes = [
		{ id: "date", label: "Date" },
		{ id: "parcelle", label: "Parcelle" },
		{ id: "culture", label: "Culture" },
		{ id: "quantite", label: "Quantité" },
		{ id: "rendement", label: "Rendement (t/ha)" },
	];

	return (
		<div style={{ padding: "var(--space-4)" }}>
			<div className="flex items-center justify-between mb-4">
				<div>
					<h2 className="heading--h2">Registre de récolte</h2>
					<p className="subheading parcelles-p-legende">
						Consultez l'historique de toutes vos récoltes.
					</p>
				</div>
				<button
					type="button"
					className="btn btn--primary"
					onClick={() => setShowForm(!showForm)}
				>
					+ Enregistrer une récolte
				</button>
			</div>

			<div className="parcelles-div-table-container">
				<div className="parcelles-div-table-header">
					{configColonnes.map((col) => (
						<div key={col.id} className="parcelles-div-table-row">
							{col.label}
						</div>
					))}
				</div>

				{recoltes.map((r) => (
					<div key={r.id} className="parcelles-div-infos">
						<p className="parcelles-div-p-infos">
							{new Date(r.date_recolte).toLocaleDateString("fr-FR")}
						</p>
						<p className="parcelles-div-p-infos">{r.parcelle_nom}</p>
						<p className="parcelles-div-p-infos">{r.culture_nom}</p>
						<p className="parcelles-div-p-infos">
							{Number(r.quantite).toFixed(1)} t
						</p>
						<p className="parcelles-div-p-infos">{r.rendement}</p>
					</div>
				))}

				{showForm && (
					<div className="parcelles-div-infos">
						<div className="parcelles-div-p-infos">
							<input
								className="field__input"
								type="date"
								name="date_recolte"
								value={form.date_recolte}
								onChange={handleChange}
							/>
						</div>
						<div className="parcelles-div-p-infos">
							<input
								className="field__input"
								type="number"
								name="parcelle_id"
								placeholder="ID parcelle"
								value={form.parcelle_id}
								onChange={handleChange}
							/>
						</div>
						<div className="parcelles-div-p-infos">
							<input
								className="field__input"
								type="number"
								name="culture_id"
								placeholder="ID culture"
								value={form.culture_id}
								onChange={handleChange}
							/>
						</div>
						<div className="parcelles-div-p-infos">
							<input
								className="field__input"
								type="number"
								name="quantite"
								placeholder="Quantité"
								value={form.quantite}
								onChange={handleChange}
							/>
						</div>
						<div className="parcelles-div-p-infos">
							<input
								className="field__input"
								type="number"
								name="rendement"
								placeholder="Rendement"
								value={form.rendement}
								onChange={handleChange}
							/>
						</div>
					</div>
				)}

				{showForm && (
					<div
						style={{
							padding: "var(--space-2) 0",
							width: "100%",
							display: "flex",
							justifyContent: "flex-end",
						}}
					>
						<button
							type="button"
							className="btn btn--primary btn--sm"
							onClick={handleSubmit}
						>
							Valider
						</button>
					</div>
				)}
			</div>

			<div className="mt-3">
				<button
					type="button"
					className="link"
					style={{
						background: "none",
						border: "none",
						color: "var(--color-error)",
					}}
				>
					Voir tout le registre{" "}
					<span className="link__arrow" style={{ color: "var(--color-error)" }}>
						→
					</span>
				</button>
			</div>
		</div>
	);
};

export default RegistreRecolte;
