import "./CardRendement.css";

function CardRendement({ rendementTotal, rendementHa, statutLabel, statutBadge }: {
    rendementTotal: string,
    rendementHa: string
    statutLabel: string,
    statutBadge: string;
}) {
    return (
        <div className="card card-rendement">
            <h2 className="card__title">RENDEMENT ESTIMÉ</h2>

            <div className="card-rendement__value">{rendementTotal} t
            </div>

            <div className="card-rendement__subtitle">
                Soit {rendementHa} t/ha
            </div>
            {statutLabel && (
                <div className={`badge ${statutBadge} mt-3`}>
                    {statutLabel}
                </div>
            )}
        </div>
    );
}

export default CardRendement;
