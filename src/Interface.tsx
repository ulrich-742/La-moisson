import "./Interface.css";

function CardParcelle() {
    return (
        <div>
            <h2> Informations de la Parcelle</h2>

            <label>Parcelle </label>
            <select>
                <option>Champ du nord</option>
            </select>

            <label> Culture </label>
            <select>
                <option>Blé </option>
            </select>

            <label> Surface (ha)</label>
            <input type="number" defaultValue="" />

            <label>Etat de la parcelle</label>
            <select>
                <option> En croissance</option>
            </select>
        </div >
    );
}

function CardConditions() {
    return (
        <div>
            <h2>CONDITIONS ACTUELLES</h2>
            <label>Condition météo</label>
            <select>
                <option>Favorable</option>
            </select>

            <p>Température <span> 22°C</span></p>
            <p>Pluviométrie (7j) <span>12mm </span></p>
            <p>Humidité <span>65%</span></p>
            <p>Vent <span>18 km/h</span></p>

            <div>
                <p>Facteur météo</p>
                <strong>1.10</strong>
            </div>
        </div>
    );
}

function CardRendement() {
    return (
        <div>
            <h2>RENDEMENT ESTIME</h2>
            <h1>28.7 t</h1>
            <p>Soit t/ha</p>
            <p>Récolte favorable</p>
        </div>
    );
}

{/* HEADER */ }

function Interface() {
    return <div>
        <div className="page-header" >
            <h1> La Moisson </h1>
            <p> Calculez le rendement estimé de vos parcelles en fonction des conditions actuelles</p>
        </div>
        <button> Historique des calculs </button>
    </div>
}
{/* CARDS */ }

<div>
    <CardParcelle />
    <CardConditions />
    <CardRendement />
</div>


export default Interface;