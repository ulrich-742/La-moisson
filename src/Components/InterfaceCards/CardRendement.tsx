import "./CardRendement.css";

function CardRendement() {
    return (
        <div className="card card-rendement">
            <h2 className="card__title">RENDEMENT ESTIMÉ</h2>

            <div className="card-rendement__value">
                28.7 t
            </div>

            <div className="card-rendement__subtitle">
                Soit 5.52 t/ha
            </div>

            <div className="badge badge--growing mt-3">
                Récolte favorable
            </div>
        </div>
    );
}

export default CardRendement;
