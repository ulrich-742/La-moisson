import { useCoursGrains } from "../../Hooks/useCoursGrains";

export default function PrixActuel() {
	const { prices, loading } = useCoursGrains();

	if (loading) return <p>Chargement...</p>;

	return (
		<div className="card">
			<h2>📦 PRIX ACTUELS</h2>

			<table className="table">
				<thead>
					<tr>
						<th>Grain</th>
						<th>Prix (€)</th>
						<th>Évolution</th>
					</tr>
				</thead>

				<tbody>
					{prices.map((grain) => (
						<tr key={grain.name}>
							<td>{grain.name}</td>
							<td>{grain.price} €</td>
							<td className={grain.evolution >= 0 ? "up" : "down"}>
								{grain.evolution >= 0 ? "▲" : "▼"} {grain.evolution}%
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<button
				type="button"
				className="button"
				onClick={() =>
					document
						.getElementById("historique-prix")
						?.scrollIntoView({ behavior: "smooth" })
				}
			>
				Voir l'historique des prix
			</button>
		</div>
	);
}
