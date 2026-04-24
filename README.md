# BuildFlow — Gestion de chantiers BTP

Application web de suivi de projets de construction avec interface Kanban.
Développée avec **Vue 3** (frontend) et **Node/Express** (backend).

---

## Lancement

### 1. Backend (API Express)

```bash
cd backend
npm install
node server.js
# API disponible sur http://localhost:3000
```

### 2. Frontend (Vue 3)

```bash
cd frontend
npm install
npm run dev
# Application sur http://localhost:5173
```

> Les deux serveurs doivent être lancés simultanément.

---

## Arborescence

```
TP6_WEB/
├── backend/
│   ├── data/
│   │   ├── projects.json       # Données des chantiers
│   │   └── tasks.json          # Données des tâches
│   ├── routes/
│   │   ├── projects.js         # Routes GET /projects
│   │   └── tasks.js            # Routes GET/POST /tasks
│   └── server.js               # Point d'entrée Express
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── Navbar.vue      # Navigation globale
│       │   ├── ProjectCard.vue # Carte d'un chantier
│       │   ├── KanbanColumn.vue# Colonne Kanban réutilisable
│       │   ├── TaskCard.vue    # Carte d'une tâche
│       │   └── TaskForm.vue    # Formulaire d'ajout de tâche
│       ├── views/
│       │   ├── HomeView.vue        # Page d'accueil (/)
│       │   ├── ProjectsView.vue    # Liste des chantiers (/projects)
│       │   ├── KanbanView.vue      # Tableau Kanban (/kanban/:id)
│       │   └── TaskDetailView.vue  # Détail tâche (/tasks/:id)
│       ├── router/index.ts     # Déclaration des routes Vue Router
│       ├── App.vue             # Composant racine
│       └── main.ts             # Point d'entrée Vue
└── README.md
```

---

## Fonctionnalités terminées

- [x] Page d'accueil avec présentation de l'application
- [x] Liste des chantiers avec cartes détaillées (`/projects`)
- [x] Tableau Kanban avec 4 colonnes : À faire, En cours, Bloqué, Terminé (`/kanban/:id`)
- [x] Fiche détail d'une tâche (`/tasks/:id`)
- [x] Formulaire d'ajout de tâche avec `v-model` et validation
- [x] Filtre par texte et par priorité sur le Kanban
- [x] API REST : `GET /projects`, `GET /projects/:id`, `GET /tasks`, `GET /tasks/:id`, `POST /tasks`
- [x] Données avec 2 profils métier : chef de projet et conducteur de travaux
- [x] Interface BTP (bleu `#1a3a5c`, orange `#f4a030`, gris, blanc)

---

## Limites connues

- Pas de base de données : les données sont stockées dans des fichiers JSON côté serveur
- Pas d'authentification utilisateur
- Pas de modification ou suppression de tâche (lecture + ajout uniquement)
- Pas de drag & drop entre colonnes Kanban

---

## Prochaines étapes (Partie 2)

- Drag & drop entre colonnes Kanban
- Authentification par rôle (chef de projet / conducteur de travaux)
- Base de données SQLite ou MongoDB
- Modification et suppression de tâches

---

## Note sur l'usage de l'IA

La structure initiale, les composants, les données de démonstration et la logique de filtrage
ont été générés avec assistance IA (Cursor / Claude), puis relus, adaptés, testés et commentés
manuellement pour garantir la cohérence entre frontend, backend et données.
