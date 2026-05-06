import "./Interface.css";
import CardParcelle from "../../InterfaceCards/CardParcelle";
import CardConditions from "../../InterfaceCards/CardConditions";
import CardRendement from "../../InterfaceCards/CardRendement";

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