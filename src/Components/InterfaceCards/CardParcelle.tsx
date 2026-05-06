
type CardParcelleProps = {
    surface: number;
    culture: string;
    etat: string;
    parcelles: string[];
    onSurfaceChange: (v: number) => void;
    onCultureChange: (v: string) => void;
    onEtatChange: (v: string) => void;
}


function CardParcelle({ surface, culture, etat, parcelles, onSurfaceChange, onCultureChange, onEtatChange }: CardParcelleProps) {
    return (
        <div className="card">
            <h2 className="card__title"> Informations de la Parcelle</h2>

            <div className="field">
                <label className="field__label">Parcelle </label>
                <div className="select">
                    <select className="select__input">
                        {parcelles.map(p => (
                            <option key={p} value={p}>{p}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="field">
                <label className="field__label"> Culture </label>
                <div className="select">
                    <select className="select__input" value={culture} onChange={e => onCultureChange(e.target.value)}>
                        <option>Blé</option>
                        <option>Maïs</option>
                        <option>Orge</option>
                    </select>
                </div>
            </div>

            <div className="field">
                <label className="field__label"> Surface (ha)</label>
                <input
                    className="field__input"
                    type="number"
                    value={surface}
                    onChange={e => onSurfaceChange(Number(e.target.value))} />
            </div>

            <div className="field">
                <label className="field__label">Etat de la parcelle</label>
                <div className="select">
                    <select className="select__input" value={etat} onChange={e => onEtatChange(e.target.value)}>
                        <option>En croissance</option>
                        <option>Semée</option>
                        <option>Au repos</option>
                    </select>
                </div >
            </div>
        </div >
    );
}
export default CardParcelle;