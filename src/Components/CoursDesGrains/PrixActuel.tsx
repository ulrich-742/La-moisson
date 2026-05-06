type Grain = {
  name: string;
  price: number;
  evolution: number;
};

const data: Grain[] = [
  { name: "Blé", price: 210, evolution: 2.5 },
  { name: "Maïs", price: 185, evolution: -1.2 },
  { name: "Orge", price: 195, evolution: 1.1 },
  { name: "Avoine", price: 170, evolution: -0.5 },
];

export default function PriceTable() {
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
          {data.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.price} €</td>

              <td className={item.evolution >= 0 ? "up" : "down"}>
                {item.evolution >= 0 ? "▲" : "▼"} {item.evolution}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" className="bouton">
        Voir l’historique des prix
      </button>
    </div>
  );
}