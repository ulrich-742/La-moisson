import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/* =========================
   API TEST
========================= */

app.get("/", (req, res) => {
  res.send("API La Moisson fonctionne");
});

/* =========================
   DONNÉES LIVE
========================= */

let grains = [
  { name: "Blé", price: 210, evolution: 2.5 },
  { name: "Maïs", price: 185, evolution: -1.2 },
  { name: "Orge", price: 195, evolution: 1.1 },
  { name: "Avoine", price: 170, evolution: -0.5 },
];

/* =========================
   HISTORIQUE GRAPHIQUE
========================= */

let history = [];

/* =========================
   UPDATE AUTOMATIQUE
========================= */

setInterval(() => {
  grains = grains.map((grain) => {
    const variation = Number(
      (Math.random() * 4 - 2).toFixed(2)
    );

    return {
      ...grain,

      price: Number(
        (grain.price + variation).toFixed(2)
      ),

      evolution: variation,
    };
  });

  history.push({
    time: new Date().toLocaleTimeString("fr-FR"),

    ble: grains[0].price,
    mais: grains[1].price,
    orge: grains[2].price,
    avoine: grains[3].price,
  });

  if (history.length > 20) {
    history.shift();
  }

}, 3000);

/* =========================
   API PRIX GRAINS
========================= */

app.get("/api/grains/prices", (req, res) => {
  res.json(grains);
});

/* =========================
   API HISTORIQUE
========================= */

app.get("/api/grains/history", (req, res) => {
  res.json(history);
});

/* =========================
   SERVER
========================= */

app.listen(PORT, () => {
  console.log(
    `API lancée sur http://localhost:${PORT}`
  );
});