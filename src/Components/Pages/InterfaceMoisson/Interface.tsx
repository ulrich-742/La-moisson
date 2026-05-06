import "./Interface.css";
import CardParcelle from "../../InterfaceCards/CardParcelle";
import CardConditions from "../../InterfaceCards/CardConditions";
import CardRendement from "../../InterfaceCards/CardRendement";

{/* HEADER */ }

function Interface() {
    return (
        <div className="interface">
            <div>
                <div className="interface-header">
                    <div className="interface-header__titles">
                        <h1>La Moisson</h1>
                        <p>Calculez le rendement estimé de vos parcelles en fonction des conditions actuelles</p>
                    </div>
                    <button className="btn btn--secondary">Historique des calculs</button>
                </div>

                {/* CARDS */}

                <div className="interface-cards">
                    <CardParcelle />
                    <CardConditions />
                    <CardRendement />
                </div>

                <div className="interface-footer">
                    <button className="btn btn--primary btn--lg">
                        Calculer le rendement
                    </button>
                </div>
            </div>
        </div>
    );
}



export default Interface;