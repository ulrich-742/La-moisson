import { useEffect, useState } from "react";

type Grain = {
  name: string;
  price: number;
  evolution: number;
};

export default function PrixActuel() {
  const [grains, setGrains] = useState<Grain[]>([]);

  useEffect(() => {
    async function fetchPrices() {
      const response = await fetch(
        "http://localhost:5000/api/grains/prices"
      );

      const data = await response.json();

      setGrains(data);
    }

    /* premier chargement */
    fetchPrices();

    /* refresh automatique */
    const interval = setInterval(fetchPrices, 3000);

    /* cleanup */
    return () => clearInterval(interval);

  }, []);

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
          {grains.map((grain) => (
            <tr key={grain.name}>
              <td>{grain.name}</td>

              <td>
                {grain.price} €
              </td>

              <td
                className={
                  grain.evolution >= 0
                    ? "up"
                    : "down"
                }
              >
                {grain.evolution >= 0
                  ? "▲"
                  : "▼"}{" "}

                {grain.evolution}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" className="button"
        onClick={() =>
          document
            .getElementById("historique-prix")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      > 
        Voir l’historique des prix
      </button>
    </div>
  );
}