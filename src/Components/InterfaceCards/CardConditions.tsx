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
export default CardConditions;