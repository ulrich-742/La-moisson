import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

type HistoryPoint = {
  time: string;

  ble: number;
  mais: number;
  orge: number;
  avoine: number;
};

export default function CoursDesGrainsEvolutions() {

  const [data, setData] = useState<HistoryPoint[]>([]);

  useEffect(() => {

    async function fetchHistory() {

      const response = await fetch(
        "http://localhost:5000/api/grains/history"
      );

      const result = await response.json();

      setData(result);
    }

    /* premier chargement */
    fetchHistory();

    /* refresh auto */
    const interval = setInterval(fetchHistory, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div id="historique-prix"className="card chart-card">

      <h2>📈 ÉVOLUTION EN DIRECT</h2>

      <ResponsiveContainer width="100%" height={320}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="ble"
            name="Blé"
            stroke="#2f8b46"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="mais"
            name="Maïs"
            stroke="#e3a623"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="orge"
            name="Orge"
            stroke="#c9a031"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="avoine"
            name="Avoine"
            stroke="#738b8a"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}