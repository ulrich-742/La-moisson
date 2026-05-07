import { useEffect, useState } from "react";
import { getParcelles } from "../Services/api";

export interface Parcelle {
	id: number;
	nom: string;
	culture_nom: string;
	surface: number;
	etat: string;
	derniere_maj: string;
}

export const useParcelles = () => {
	const [parcelles, setParcelles] = useState<Parcelle[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getParcelles().then((data) => {
			setParcelles(data);
			setLoading(false);
		});
	}, []);

	return { parcelles, loading };
};
