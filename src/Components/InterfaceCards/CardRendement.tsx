import "./CardRendement.css";

function CardRendement({ rendementTotal, rendementHa }: {
    rendementTotal: string,
    rendementHa: string
}) {
    return (
        <div className="card card-rendement">
            <h2 className="card__title">RENDEMENT ESTIMÉ</h2>

            <div className="card-rendement__value">{rendementTotal} t
            
            </div>

            <div className="card-rendement__subtitle">
                Soit {rendementHa} t/ha
            </div>

            <div className="badge badge--growing mt-3">
                Récolte favorable
            </div>
        </div>
    );
}

export default CardRendement;
