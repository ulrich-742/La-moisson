import PrixActuel from "../../Components/CoursDesGrains/PrixActuel";
import CoursDesGrainsEvolutions from "../../Components/CoursDesGrains/CoursDesGrainsEvolutions";

import "./CoursDesGrains.css";

export default function CoursDesGrains() {
  return (
    <div className="page">
      <h1 className="title">📊 COURS DES GRAINS</h1>

      <p className="subtitle">
        Suivez l'évolution des prix des grains sur le marché.
      </p>

      <div className="grid-2">
        <PrixActuel />
        <CoursDesGrainsEvolutions />
      </div>
    </div>
  );
}