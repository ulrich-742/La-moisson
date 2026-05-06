{
	/* A faire : Supprimer les boutons et faire un import d'un composant button depuis
			components/ui/button.tsx afin d'avoir un code plus modulaire */
}

import { useRecoltes } from "../../hooks/useRecoltes";

const RegistreRecolte = () => {
	const { recoltes, loading } = useRecoltes();
	if (loading) return <p>Chargement...</p>;

	return (
		<table className=".table-wrapper">
			<thead>
				<tr>
					<th>Colonne </th>
					<th>Colonne</th>
				</tr>
			</thead>
			<tbody>
				<tr>[props]</tr>
				<tr>{props}</tr>
			</tbody>
		</table>
	);
};

export default RegistreRecolte;
