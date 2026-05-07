const API_URL = "http://localhost:3000/api";

export const getRecoltes = async () => {
	const res = await fetch(`${API_URL}/recoltes`);
	return res.json();
};

export const getParcelles = async () => {
	const res = await fetch(`${API_URL}/parcelles`);
	return res.json();
};

export const createRecolte = async (data: {
	date_recolte: string;
	parcelle_id: number;
	culture_id: number;
	quantite: number;
	rendement: number;
}) => {
	const res = await fetch(`${API_URL}/recoltes`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	return res.json();
};
