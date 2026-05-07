import { useEffect, useState } from "react";
import { getGrainsPrices, getGrainsHistory } from "../Services/api";

export interface GrainPrice {
	name: string;
	price: number;
	evolution: number;
}

export interface GrainHistory {
	time: string;
	ble: number;
	mais: number;
	orge: number;
	avoine: number;
}

export const useCoursGrains = () => {
	const [prices, setPrices] = useState<GrainPrice[]>([]);
	const [history, setHistory] = useState<GrainHistory[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const [p, h] = await Promise.all([getGrainsPrices(), getGrainsHistory()]);
			setPrices(p);
			setHistory(h);
			setLoading(false);
		};

		fetchData();

		const interval = setInterval(fetchData, 3000);
		return () => clearInterval(interval);
	}, []);

	return { prices, history, loading };
};
