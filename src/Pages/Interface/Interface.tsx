import "./Interface.css";
import { useState } from "react";
import { calculerRendement } from "../../utils/CalculRendement";
import CardParcelle from "../../Components/InterfaceCards/CardParcelle";
import CardConditions from "../../Components/InterfaceCards/CardConditions";
import CardRendement from "../../Components/InterfaceCards/CardRendement";


const parcelles = [
    "Champ du Nord",
    "Les Hauts",
    "Le Colombier",
    "La Petite Plaine",
    "Champ du Sud",
    "Les Vallons",
];

function Interface() {

    const [surface, setSurface] = useState(0);
    const [culture, setCulture] = useState("Blé");
    const [etat, setEtat] = useState("En croissance");
    const [conditionMeteo, setConditionMeteo] = useState("Favorable");
    const [resultat, setResultat] = useState<{ rendementHa: string, rendementTotal: string, statutLabel: string, statutBadge: string } | null>(null);

    function handleCalculer() {
        const res = calculerRendement({
            surface,
            culture,
            etat,
            conditionMeteo,
        });
        setResultat(res);
    }

    return (
        <div className="interface">
            <div className="interface-header">
                <div className="interface-header__titles">
                    <h1>La Moisson</h1>
                    <p>Calculez le rendement estimé de vos parcelles en fonction des conditions actuelles</p>
                </div>
                <button className="btn btn--secondary">Historique des calculs</button>
            </div>

            {/* CARDS */}

            <div className="interface-cards">
                <CardParcelle
                    surface={surface}
                    culture={culture}
                    etat={etat}
                    parcelles={parcelles}
                    onSurfaceChange={setSurface}
                    onCultureChange={setCulture}
                    onEtatChange={setEtat} />
                <CardConditions
                    conditionMeteo={conditionMeteo}
                    onConditionMeteoChange={setConditionMeteo} />
                <CardRendement
                    rendementTotal={resultat?.rendementTotal ?? "--"}
                    rendementHa={resultat?.rendementHa ?? "--"}
                    statutLabel={resultat?.statutLabel ?? ""}
                    statutBadge={resultat?.statutBadge ?? "badge--resting"} />
            </div>

            <div className="interface-footer">
                <button className="btn btn--primary btn--lg" onClick={handleCalculer}>
                    Calculer le rendement
                </button>
            </div>
        </div>
    );
}



export default Interface;