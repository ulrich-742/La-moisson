export default function EvolutionChart() {
  return (
    <div className="card">
      <h2>📈 ÉVOLUTION (30 JOURS)</h2>

      <div className="legend">
        <span className="ble">● Blé</span>
        <span className="mais">● Maïs</span>
        <span className="orge">● Orge</span>
        <span className="avoine">● Avoine</span>
      </div>

      <div className="chart">
        <div className="line ble-line"></div>
        <div className="line mais-line"></div>
        <div className="line orge-line"></div>
        <div className="line avoine-line"></div>
      </div>

      <p className="chart-note">
        15 Avr → 13 Mai
      </p>
    </div>
  );
}