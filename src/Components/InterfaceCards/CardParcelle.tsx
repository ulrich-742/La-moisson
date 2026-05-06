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
export default CardParcelle;