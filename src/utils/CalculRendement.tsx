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
export function getStatutRecolte(rendementHa: number): {
    label: string;
    badge: string;
} {
    if (rendementHa >= 15) {
        return { label: "Excellente récolte", badge: "badge--growing" };
    } else if (rendementHa >= 10) {
        return { label: "Récolte favorable", badge: "badge--growing" };
    } else if (rendementHa >= 5) {
        return { label: "Récolte moyenne", badge: "badge--sown" };
    } else {
        return { label: "Récolte défavorable", badge: "badge--resting" };
    }
}

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
    const statut = getStatutRecolte(rendementHa);

    return {
        rendementHa: rendementHa.toFixed(2),
        rendementTotal: rendementTotal.toFixed(1),
        statutLabel: statut.label,
        statutBadge: statut.badge,
    };
}
