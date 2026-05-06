//a mettre en .env ?
const API_URL = "http://localhost:3000/api";

export const getRecoltes = async () => {
	const res = await fetch(`${API_URL}/recoltes`);
	return res.json();
};

export const getParcelles = async () => {
	const res = await fetch(`${API_URL}/parcelles`);
	return res.json();
};
