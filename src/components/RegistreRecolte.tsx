{
	/* A faire : Supprimer les boutons et faire un import d'un composant button depuis
			components/ui/button.tsx afin d'avoir un code plus modulaire */
}

const RegistreRecolte = () => {
	return (
		<div>
			<div>
				<h2>REGISTRE DE RECOLTE</h2>
				<h4>Consultez l'historique de toutes vos récoltes</h4>
				<button type="button">+ Enregistrer une récolte</button>
			</div>
			<button type="button">Voir tout le registre →</button>
		</div>
	);
};

export default RegistreRecolte;
