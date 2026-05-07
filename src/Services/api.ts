const API_URL = "http://localhost:3000/api";

// --- RÉCOLTES ---
export const getRecoltes = async () => {
	const res = await fetch(`${API_URL}/recoltes`);
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

// --- PARCELLES ---
export const getParcelles = async () => {
	const res = await fetch(`${API_URL}/parcelles`);
	return res.json();
};

// --- CULTURES ---
export const getCultures = async () => {
	const res = await fetch(`${API_URL}/cultures`);
	return res.json();
};

// --- COURS DES GRAINS ---
export const getGrainsPrices = async () => {
	const res = await fetch(`${API_URL}/grains/prices`);
	return res.json();
};

export const getGrainsHistory = async () => {
	const res = await fetch(`${API_URL}/grains/history`);
	return res.json();
};

// --- CALCULS DE RENDEMENT ---
export const getCalculs = async () => {
	const res = await fetch(`${API_URL}/calculs`);
	return res.json();
};

export const createCalcul = async (data: {
	date_calcul: string;
	parcelle_id: number;
	culture_id: number;
	surface: number;
	condition_meteo: string;
	temperature: number;
	pluviometrie: number;
	humidite: number;
	vent: number;
	etat_parcelle: string;
	facteur_meteo: number;
	rendement_estime_t: number;
	rendement_estime_tha: number;
	appreciation: string;
}) => {
	const res = await fetch(`${API_URL}/calculs`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	return res.json();
};
