<template>
  <!-- Tableau Kanban d'un chantier avec 4 colonnes et filtres -->
  <div class="kanban-view">

    <!-- En-tête avec nom du chantier et bouton d'ajout -->
    <div class="kanban-header">
      <div class="header-info">
        <RouterLink to="/projects" class="back-link">← Chantiers</RouterLink>
        <h2 v-if="project">{{ project.name }}</h2>
        <p v-if="project" class="project-meta">
          📍 {{ project.location }} &nbsp;|&nbsp;
          👷 {{ project.chefProjet }} &nbsp;|&nbsp;
          🔧 {{ project.conducteurTravaux }}
        </p>
      </div>
      <button class="btn-add" @click="showForm = true">+ Ajouter une tâche</button>
    </div>

    <!-- Barre de filtres : recherche texte + filtre priorité -->
    <div class="filter-bar">
      <input
        v-model="searchText"
        type="text"
        placeholder="🔍  Rechercher une tâche..."
        class="filter-input"
      />
      <select v-model="filterPriority" class="filter-select">
        <option value="">Toutes priorités</option>
        <option value="Haute">Haute</option>
        <option value="Moyenne">Moyenne</option>
        <option value="Basse">Basse</option>
      </select>
    </div>

    <!-- Tableau Kanban : 4 colonnes correspondant aux 4 statuts -->
    <div class="kanban-board">
      <KanbanColumn
        v-for="col in columns"
        :key="col.status"
        :title="col.label"
        :tasks="filteredTasksByStatus(col.status)"
        :columnColor="col.color"
      />
    </div>

    <!-- Modale du formulaire d'ajout de tâche -->
    <TaskForm
      v-if="showForm && project"
      :projectId="project.id"
      @close="showForm = false"
      @task-added="onTaskAdded"
    />
  </div>
</template>

<script>
import KanbanColumn from '../components/KanbanColumn.vue'
import TaskForm from '../components/TaskForm.vue'

export default {
  name: 'KanbanView',
  components: { KanbanColumn, TaskForm },
  data() {
    return {
      project: null,
      tasks: [],
      showForm: false,
      searchText: '',    // Texte saisi dans le filtre de recherche
      filterPriority: '', // Priorité sélectionnée dans le filtre

      // Définition des 4 colonnes Kanban avec leur couleur d'accentuation
      columns: [
        { status: 'À faire',  label: 'À faire',  color: '#607d8b' },
        { status: 'En cours', label: 'En cours', color: '#1a3a5c' },
        { status: 'Bloqué',   label: 'Bloqué',   color: '#f4a030' },
        { status: 'Terminé',  label: 'Terminé',  color: '#4caf50' },
      ],
    }
  },
  async mounted() {
    const id = this.$route.params.id
    // Chargement simultané du projet et de ses tâches via l'API
    const [projRes, taskRes] = await Promise.all([
      fetch(`http://localhost:3000/projects/${id}`),
      fetch(`http://localhost:3000/tasks?projectId=${id}`),
    ])
    this.project = await projRes.json()
    this.tasks = await taskRes.json()
  },
  methods: {
    // Retourne les tâches d'un statut donné après application des filtres
    filteredTasksByStatus(status) {
      return this.tasks.filter((t) => {
        const matchStatus = t.status === status
        const matchText =
          this.searchText === '' ||
          t.title.toLowerCase().includes(this.searchText.toLowerCase())
        const matchPriority = this.filterPriority === '' || t.priority === this.filterPriority
        return matchStatus && matchText && matchPriority
      })
    },

    // Ajoute la tâche créée à la liste locale sans recharger la page
    onTaskAdded(task) {
      this.tasks.push(task)
    },
  },
}
</script>

<style scoped>
.kanban-view {
  max-width: 1300px;
  margin: 0 auto;
  padding: 1.5rem 1.5rem 2rem;
}

.kanban-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.2rem;
  gap: 1rem;
}

.header-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.back-link {
  color: #1a3a5c;
  font-size: 0.85rem;
  text-decoration: none;
  opacity: 0.7;
}

.back-link:hover {
  opacity: 1;
  text-decoration: underline;
}

h2 {
  color: #1a3a5c;
  margin: 0;
  font-size: 1.5rem;
}

.project-meta {
  color: #777;
  margin: 0;
  font-size: 0.85rem;
}

.btn-add {
  background: #f4a030;
  color: white;
  border: none;
  padding: 0.55rem 1.3rem;
  border-radius: 7px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: background 0.2s;
}

.btn-add:hover {
  background: #d4891a;
}

/* Barre de filtres */
.filter-bar {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.filter-input,
.filter-select {
  padding: 0.5rem 0.9rem;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-size: 0.9rem;
  font-family: inherit;
  transition: border-color 0.2s;
}

.filter-input {
  flex: 1;
  min-width: 220px;
}

.filter-input:focus,
.filter-select:focus {
  outline: none;
  border-color: #1a3a5c;
}

/* Tableau Kanban horizontal */
.kanban-board {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  align-items: flex-start;
  padding-bottom: 1rem;
}
</style>
