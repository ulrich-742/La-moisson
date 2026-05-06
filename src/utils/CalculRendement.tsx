const rendementBase: Record<string, number> = {
    "Blé": 6.5,
    "Maïs": 9.0,
    "Orge": 5.5,
};

const facteurEtat: Record<string, number> = {
    "En croissance": 1.0,
    "Semée": 0.6,
    "Au repos": 0.0,
};

const facteurMeteo: Record<string, number> = {
    "Favorable": 1.10,
    "Neutre": 1.00,
    "Défavorable": 0.85,
};

export function calculerRendement(parcelle: {
    surface: number;
    culture: string;
    etat: string;
    conditionMeteo: string;
}) {
    const base = rendementBase[parcelle.culture] ?? 6;
    const etat = facteurEtat[parcelle.etat] ?? 1;
    const meteo = facteurMeteo[parcelle.conditionMeteo] ?? 1;

    const rendementHa = base * etat * meteo;
    const rendementTotal = rendementHa * parcelle.surface;

    return {
        rendementHa: rendementHa.toFixed(2),
        rendementTotal: rendementTotal.toFixed(1),
    };
}
