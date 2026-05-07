const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

db.connect((err) => {
	if (err) {
		console.error("Erreur de connexion :", err);
		return;
	}
	console.log("Connecté à MySQL !");
});

// --- GRAINS EN TEMPS RÉEL (Samy) ---

let grains = [
	{ name: "Blé", price: 210, evolution: 2.5 },
	{ name: "Maïs", price: 185, evolution: -1.2 },
	{ name: "Orge", price: 195, evolution: 1.1 },
	{ name: "Avoine", price: 170, evolution: -0.5 },
];

let grainsHistory = [];

setInterval(() => {
	grains = grains.map((grain) => {
		const variation = Number((Math.random() * 20 - 10).toFixed(2));
		return {
			...grain,
			price: Number((grain.price + variation).toFixed(2)),
			evolution: variation,
		};
	});

	grainsHistory.push({
		time: new Date().toLocaleTimeString("fr-FR"),
		ble: grains[0].price,
		mais: grains[1].price,
		orge: grains[2].price,
		avoine: grains[3].price,
	});

	if (grainsHistory.length > 20) {
		grainsHistory.shift();
	}
}, 3000);

app.get("/api/grains/prices", (req, res) => {
	res.json(grains);
});

app.get("/api/grains/history", (req, res) => {
	res.json(grainsHistory);
});

// --- PARCELLES ---

app.get("/api/parcelles", (req, res) => {
	const sql = `
    SELECT p.*, c.nom AS culture_nom
    FROM parcelles p
    JOIN cultures c ON p.culture_id = c.id
  `;
	db.query(sql, (err, results) => {
		if (err) return res.status(500).json({ error: err.message });
		res.json(results);
	});
});

app.get("/api/parcelles/:id", (req, res) => {
	const sql = `
    SELECT p.*, c.nom AS culture_nom
    FROM parcelles p
    JOIN cultures c ON p.culture_id = c.id
    WHERE p.id = ?
  `;
	db.query(sql, [req.params.id], (err, results) => {
		if (err) return res.status(500).json({ error: err.message });
		res.json(results[0]);
	});
});

app.post("/api/parcelles", (req, res) => {
	const { nom, culture_id, surface, etat, derniere_maj } = req.body;
	const sql =
		"INSERT INTO parcelles (nom, culture_id, surface, etat, derniere_maj) VALUES (?, ?, ?, ?, ?)";
	db.query(
		sql,
		[nom, culture_id, surface, etat, derniere_maj],
		(err, result) => {
			if (err) return res.status(500).json({ error: err.message });
			res.json({ id: result.insertId, message: "Parcelle créée" });
		},
	);
});

app.put("/api/parcelles/:id", (req, res) => {
	const { nom, culture_id, surface, etat, derniere_maj } = req.body;
	const sql =
		"UPDATE parcelles SET nom=?, culture_id=?, surface=?, etat=?, derniere_maj=? WHERE id=?";
	db.query(
		sql,
		[nom, culture_id, surface, etat, derniere_maj, req.params.id],
		(err) => {
			if (err) return res.status(500).json({ error: err.message });
			res.json({ message: "Parcelle mise à jour" });
		},
	);
});

app.delete("/api/parcelles/:id", (req, res) => {
	db.query("DELETE FROM parcelles WHERE id = ?", [req.params.id], (err) => {
		if (err) return res.status(500).json({ error: err.message });
		res.json({ message: "Parcelle supprimée" });
	});
});

// --- RÉCOLTES ---

app.get("/api/recoltes", (req, res) => {
	const sql = `
    SELECT r.*, p.nom AS parcelle_nom, c.nom AS culture_nom
    FROM recoltes r
    JOIN parcelles p ON r.parcelle_id = p.id
    JOIN cultures c ON r.culture_id = c.id
    ORDER BY r.date_recolte DESC
  `;
	db.query(sql, (err, results) => {
		if (err) return res.status(500).json({ error: err.message });
		res.json(results);
	});
});

app.post("/api/recoltes", (req, res) => {
	const { date_recolte, parcelle_id, culture_id, quantite, rendement } =
		req.body;
	const sql =
		"INSERT INTO recoltes (date_recolte, parcelle_id, culture_id, quantite, rendement) VALUES (?, ?, ?, ?, ?)";
	db.query(
		sql,
		[date_recolte, parcelle_id, culture_id, quantite, rendement],
		(err, result) => {
			if (err) return res.status(500).json({ error: err.message });
			res.json({ id: result.insertId, message: "Récolte enregistrée" });
		},
	);
});

// --- COURS DES GRAINS (BDD) ---

app.get("/api/cours", (req, res) => {
	const sql = `
    SELECT cg.*, c.nom AS culture_nom
    FROM cours_grains cg
    JOIN cultures c ON cg.culture_id = c.id
    ORDER BY cg.date_cours DESC
  `;
	db.query(sql, (err, results) => {
		if (err) return res.status(500).json({ error: err.message });
		res.json(results);
	});
});

// --- MÉTÉO ---

app.get("/api/meteo", (req, res) => {
	db.query(
		"SELECT * FROM meteo ORDER BY date_releve DESC LIMIT 1",
		(err, results) => {
			if (err) return res.status(500).json({ error: err.message });
			res.json(results[0]);
		},
	);
});

app.get("/api/previsions", (req, res) => {
	db.query(
		"SELECT * FROM previsions_meteo ORDER BY date_prevision ASC",
		(err, results) => {
			if (err) return res.status(500).json({ error: err.message });
			res.json(results);
		},
	);
});

// --- CULTURES ---

app.get("/api/cultures", (req, res) => {
	db.query("SELECT * FROM cultures", (err, results) => {
		if (err) return res.status(500).json({ error: err.message });
		res.json(results);
	});
});

// --- CALCULS DE RENDEMENT ---

app.get("/api/calculs", (req, res) => {
	const sql = `
    SELECT cr.*, p.nom AS parcelle_nom, c.nom AS culture_nom
    FROM calculs_rendement cr
    JOIN parcelles p ON cr.parcelle_id = p.id
    JOIN cultures c ON cr.culture_id = c.id
    ORDER BY cr.date_calcul DESC
  `;
	db.query(sql, (err, results) => {
		if (err) return res.status(500).json({ error: err.message });
		res.json(results);
	});
});

app.post("/api/calculs", (req, res) => {
	const {
		date_calcul,
		parcelle_id,
		culture_id,
		surface,
		condition_meteo,
		temperature,
		pluviometrie,
		humidite,
		vent,
		etat_parcelle,
		facteur_meteo,
		rendement_estime_t,
		rendement_estime_tha,
		appreciation,
	} = req.body;
	const sql =
		"INSERT INTO calculs_rendement (date_calcul, parcelle_id, culture_id, surface, condition_meteo, temperature, pluviometrie, humidite, vent, etat_parcelle, facteur_meteo, rendement_estime_t, rendement_estime_tha, appreciation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
	db.query(
		sql,
		[
			date_calcul,
			parcelle_id,
			culture_id,
			surface,
			condition_meteo,
			temperature,
			pluviometrie,
			humidite,
			vent,
			etat_parcelle,
			facteur_meteo,
			rendement_estime_t,
			rendement_estime_tha,
			appreciation,
		],
		(err, result) => {
			if (err) return res.status(500).json({ error: err.message });
			res.json({ id: result.insertId, message: "Calcul enregistré" });
		},
	);
});

app.listen(process.env.PORT, () => {
	console.log(`Serveur lancé sur http://localhost:${process.env.PORT}`);
});
