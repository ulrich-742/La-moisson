type HistoriqueEntry = {
    date: string;
    culture: string;
    surface: number;
    rendementTotal: string;
    rendementHa: string;
    statutLabel: string;
}

type HistoriqueModalProps = {
    historique: HistoriqueEntry[];
    onClose: () => void;
}

function HistoriqueModal({ historique, onClose, }: HistoriqueModalProps) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>

                <div className="modal__header">
                    <h2 className="modal__title"> Historique des calculs </h2>
                    <button className="modal__close" onClick={onClose}>X</button>
                </div>
                <div className="modal__body">
                    {historique.length === 0 ? (
                        <p className="text text--secondary">Aucun calcul effectué pour le moment</p>
                    ) : (
                        <table className="table">
                            <thead className="table__head">
                                <tr>
                                    <th className="table__th">Date</th>
                                    <th className="table__th">Culture</th>
                                    <th className="table__th">Surface</th>
                                    <th className="table__th table__th--right">Rendement total</th>
                                    <th className="table__th table__th--right">t/ha</th>
                                    <th className="table__th">Statut</th>
                                </tr>
                            </thead>

                            <tbody className="table__body">
                                {historique.map((entry, index) => (
                                    <tr key={index} className="table__row">
                                        <td className="table__td">{entry.date}</td>
                                        <td className="table__td">{entry.culture}</td>
                                        <td className="table__td">{entry.surface} ha</td>
                                        <td className="table__td table__td--right">{entry.rendementTotal}</td>
                                        <td className="table__td table__td--right">{entry.rendementHa}</td>
                                        <td className="table__td">{entry.statutLabel}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HistoriqueModal;