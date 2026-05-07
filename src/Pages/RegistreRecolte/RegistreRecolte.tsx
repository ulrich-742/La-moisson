import { useState } from "react";
import { useRecoltes } from "../../Hooks/useRecoltes";
import { createRecolte } from "../../Services/api";

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

	return (
		<div
			style={{ padding: "var(--space-4)", maxWidth: "900px", margin: "0 auto" }}
		>
			<div className="flex items-center justify-between mb-4">
				<div>
					<h2
						className="heading heading--h3"
						style={{ fontSize: "var(--font-size-xl)" }}
					>
						Registre de récolte
					</h2>
					<p className="text text--secondary mt-1">
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

			<div className="card">
				<div className="table-wrapper">
					<table className="table">
						<thead>
							<tr>
								<th
									className="table__th"
									style={{
										background: "none",
										color: "var(--color-text)",
										textTransform: "none",
										fontFamily: "var(--font-body)",
										fontWeight: "var(--font-weight-semibold)",
										fontSize: "var(--font-size-base)",
									}}
								>
									Date
								</th>
								<th
									className="table__th"
									style={{
										background: "none",
										color: "var(--color-text)",
										textTransform: "none",
										fontFamily: "var(--font-body)",
										fontWeight: "var(--font-weight-semibold)",
										fontSize: "var(--font-size-base)",
									}}
								>
									Parcelle
								</th>
								<th
									className="table__th"
									style={{
										background: "none",
										color: "var(--color-text)",
										textTransform: "none",
										fontFamily: "var(--font-body)",
										fontWeight: "var(--font-weight-semibold)",
										fontSize: "var(--font-size-base)",
									}}
								>
									Culture
								</th>
								<th
									className="table__th"
									style={{
										background: "none",
										color: "var(--color-text)",
										textTransform: "none",
										fontFamily: "var(--font-body)",
										fontWeight: "var(--font-weight-semibold)",
										fontSize: "var(--font-size-base)",
									}}
								>
									Quantité
								</th>
								<th
									className="table__th"
									style={{
										background: "none",
										color: "var(--color-text)",
										textTransform: "none",
										fontFamily: "var(--font-body)",
										fontWeight: "var(--font-weight-semibold)",
										fontSize: "var(--font-size-base)",
									}}
								>
									Rendement (t/ha)
								</th>
							</tr>
						</thead>
						<tbody className="table__body">
							{recoltes.map((r) => (
								<tr key={r.id} className="table__row">
									<td className="table__td">
										{new Date(r.date_recolte).toLocaleDateString("fr-FR")}
									</td>
									<td className="table__td">{r.parcelle_nom}</td>
									<td className="table__td">{r.culture_nom}</td>
									<td className="table__td">
										{Number(r.quantite).toFixed(1)} t
									</td>
									<td className="table__td">{r.rendement}</td>
								</tr>
							))}

							{showForm && (
								<tr className="table__row">
									<td className="table__td">
										<input
											className="field__input"
											type="date"
											name="date_recolte"
											value={form.date_recolte}
											onChange={handleChange}
										/>
									</td>
									<td className="table__td">
										<input
											className="field__input"
											type="number"
											name="parcelle_id"
											placeholder="ID parcelle"
											value={form.parcelle_id}
											onChange={handleChange}
										/>
									</td>
									<td className="table__td">
										<input
											className="field__input"
											type="number"
											name="culture_id"
											placeholder="ID culture"
											value={form.culture_id}
											onChange={handleChange}
										/>
									</td>
									<td className="table__td">
										<input
											className="field__input"
											type="number"
											name="quantite"
											placeholder="Quantité"
											value={form.quantite}
											onChange={handleChange}
										/>
									</td>
									<td className="table__td">
										<input
											className="field__input"
											type="number"
											name="rendement"
											placeholder="Rendement"
											value={form.rendement}
											onChange={handleChange}
										/>
										<button
											type="button"
											className="btn btn--primary btn--sm mt-2"
											onClick={handleSubmit}
										>
											Valider
										</button>
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>

				<div className="mt-3" style={{ paddingLeft: "var(--space-3)" }}>
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
						<span
							className="link__arrow"
							style={{ color: "var(--color-error)" }}
						>
							→
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default RegistreRecolte;
