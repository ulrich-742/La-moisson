function CardParcelle() {
    return (
        <div className="card">
            <h2 className="card__title"> Informations de la Parcelle</h2>

            <div className="field">
                <label className="field__label">Parcelle </label>
                <div className="select">
                    <select className="select__input">
                        <option>Champ du nord</option>
                    </select>
                </div>
            </div>

            <div className="field">
                <label className="field__label"> Culture </label>
                <div className="select">
                    <select className="select__input">
                        <option>Blé </option>
                    </select>
                </div>
            </div>

            <div className="field">
                <label className="field__label"> Surface (ha)</label>
                <input className="field__input" type="number" defaultValue="" />
            </div>

            <div className="field">
                <label className="field__label">Etat de la parcelle</label>
                <div className="select">
                    <select className="select__input">
                        <option> En croissance</option>
                    </select>
                </div >
            </div>
        </div>
    );
}
export default CardParcelle;