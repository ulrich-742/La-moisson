🌾 La Moisson
 est une application web de gestion agricole sur le thème du Moyen Âge, réalisée dans le cadre d'un hackathon. Elle permet au ou seigneur des terres de suivre ses parcelles, d'estimer le rendement de ses cultures,
de tenir un registre de ses récoltes et de consulter en temps réel les cours des grains au marché.
L'identité visuelle s'appuie sur  médiéval  pour une ambiance évoquant les manuscrits et registres d'une exploitation d'antan.

🛠️ Stack technique
React 18 + TypeScript
Vite comme outil de build
React Router pour la navigation

src/
├── main.tsx                  # Point d'entrée, configuration du routeur
├── App.tsx                   # Layout principal (Navbar + Outlet + Footer)
├── App.css / index.css       # Styles globaux
│
├── Components/
│   ├── Navbar/                # Barre de navigation
│   └── Footer/                # Pied de page
│
├── Pages/
│   ├── Interface/              # Page "Moisson"
│   ├── Parcelles/               # Page de suivi des parcelles
│   ├── CoursDesGrains/          # Page des cours des grains
│   └── RegistreRecolte/         # Page du registre de récolte
│
├── Hooks/
│   ├── useParcelles.tsx        # Récupération des parcelles
│   ├── useRecoltes.tsx         # Récupération des récoltes
│   └── useCoursGrains.tsx      # Récupération des cours (rafraîchi toutes les 3s)
│
├── Services/
│   └── api.ts                  # Appels vers l'API backend
│
└── Utils/
    └── CalculRendement.tsx     # Logique de calcul du rendement

bash# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

⚠️ Le backend doit être lancé séparément sur http://localhost:3000 pour que les données (parcelles, récoltes, cours des grains) soient disponibles.
