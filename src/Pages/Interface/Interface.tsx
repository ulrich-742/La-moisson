import "./Interface.css";
import { useState } from "react";
import { calculerRendement } from "../../utils/CalculRendement";
import CardParcelle from "../../components/InterfaceCards/CardParcelle";
import CardConditions from "../../components/InterfaceCards/CardConditions";
import CardRendement from "../../components/InterfaceCards/CardRendement";
import HistoriqueModal from "../../components/HistoriqueModal/HistoriqueModal";
import "../../Components/HistoriqueModal/HistoriqueModal.css";


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

    const [historique, setHistorique] = useState<{
        date: string;
        culture: string;
        surface: number;
        rendementTotal: string;
        rendementHa: string;
        statutLabel: string;
    }[]>([]);

    const [showHistorique, setShowHistorique] = useState(false);


    function handleCalculer() {
        const res = calculerRendement({
            surface,
            culture,
            etat,
            conditionMeteo,
        });
        setResultat(res);

        setHistorique(prev => [{
            date: "07/05/1600",
            culture,
            surface,
            rendementTotal: res.rendementTotal,
            rendementHa: res.rendementHa,
            statutLabel: res.statutLabel,
        }, ...prev]);
    }

    return (
        <div className="interface">
            <div className="interface-header">
                <div className="interface-header__titles">
                    <h1>La Moisson</h1>
                    <p>Calculez le rendement estimé de vos parcelles en fonction des conditions actuelles</p>
                </div>
                <button className="btn btn--secondary" onClick={() => setShowHistorique(true)}>Historique des calculs
                </button>
                {showHistorique && (
                    <HistoriqueModal
                        historique={historique}
                        onClose={() => setShowHistorique(false)}
                    />
                )}
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