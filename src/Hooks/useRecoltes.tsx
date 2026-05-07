import { useEffect, useState } from "react";
import { getRecoltes } from "../Services/api";

export const useRecoltes = () => {
	const [recoltes, setRecoltes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getRecoltes().then((data) => {
			setRecoltes(data);
			setLoading(false);
		});
	}, []);

	return { recoltes, loading };
};
