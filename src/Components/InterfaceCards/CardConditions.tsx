function CardConditions() {
    return (
        <div className="card card-conditions">
            <h2 className="card__title">CONDITIONS ACTUELLES</h2>

            <div className="field">
                <label className="field__label">Condition météo</label>
                <div className="select">
                    <select className="select__input">
                        <option>Favorable</option>
                    </select>
                </div>
            </div>

            <div className="card-info mt-3">
                <ul className="card-info__list">
                    <li className="card-info__item flex justify-between">
                        <span>Température</span>
                        <span>22°C</span>
                    </li>
                    <li className="card-info__item flex justify-between">
                        <span>Pluviométrie (7j)</span>
                        <span>12 mm</span>
                    </li>
                    <li className="card-info__item flex justify-between">
                        <span>Humidité</span>
                        <span>65%</span>
                    </li>
                    <li className="card-info__item flex justify-between">
                        <span>Vent</span>
                        <span>18 km/h</span>
                    </li>
                </ul>
            </div>

            <div className="card-info card-info--bordered mt-3">
                <div className="flex justify-between items-center">
                    <span className="card-info__title">Facteur météo</span>
                    <strong className="subheading subheading--h5">1.10</strong>
                </div>
            </div>
        </div>
    );
}

export default CardConditions;