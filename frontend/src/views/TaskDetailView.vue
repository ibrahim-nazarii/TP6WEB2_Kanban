<template>
  <!-- Page de détail d'une tâche, accessible via /tasks/:id -->
  <div class="task-detail">
    <RouterLink to="/projects" class="back-link">← Retour aux chantiers</RouterLink>

    <!-- Affichage du détail une fois la tâche chargée -->
    <div v-if="task" class="detail-card">
      <div class="detail-header">
        <div>
          <h2>{{ task.title }}</h2>
          <span :class="['status-badge', statusClass]">{{ task.status }}</span>
        </div>
        <span :class="['priority-badge', priorityClass]">{{ task.priority }}</span>
      </div>

      <!-- Grille de métadonnées de la tâche -->
      <div class="detail-grid">
        <div class="detail-item">
          <span class="label">Responsable</span>
          <span class="value">{{ task.responsible }}</span>
        </div>
        <div class="detail-item">
          <span class="label">Rôle</span>
          <span class="value">{{ task.role }}</span>
        </div>
        <div class="detail-item">
          <span class="label">Échéance</span>
          <span class="value">📅 {{ task.deadline }}</span>
        </div>
        <div class="detail-item">
          <span class="label">Priorité</span>
          <span class="value">{{ task.priority }}</span>
        </div>
      </div>

      <!-- Lien vers le tableau Kanban du chantier associé -->
      <RouterLink :to="`/kanban/${task.projectId}`" class="btn-kanban">
        Voir le tableau Kanban →
      </RouterLink>
    </div>

    <!-- Chargement en cours -->
    <div v-else class="loading">Chargement de la tâche...</div>
  </div>
</template>

<script>
export default {
  name: 'TaskDetailView',
  data() {
    return {
      task: null,
    }
  },
  computed: {
    // Classe CSS pour le badge de priorité
    priorityClass() {
      return { Haute: 'p-high', Moyenne: 'p-medium', Basse: 'p-low' }[this.task?.priority] || ''
    },
    // Classe CSS pour le badge de statut
    statusClass() {
      return {
        'À faire': 's-todo',
        'En cours': 's-progress',
        'Bloqué': 's-blocked',
        'Terminé': 's-done',
      }[this.task?.status] || ''
    },
  },
  async mounted() {
    // Appel API GET /tasks/:id pour récupérer la tâche ciblée
    const id = this.$route.params.id
    const res = await fetch(`http://localhost:3000/tasks/${id}`)
    this.task = await res.json()
  },
}
</script>

<style scoped>
.task-detail {
  max-width: 640px;
  margin: 2.5rem auto;
  padding: 0 1.5rem;
}

.back-link {
  color: #1a3a5c;
  font-size: 0.88rem;
  text-decoration: none;
  opacity: 0.7;
}

.back-link:hover {
  opacity: 1;
  text-decoration: underline;
}

.detail-card {
  background: white;
  border: 1px solid #dde3ea;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 1.5rem;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.07);
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.8rem;
  gap: 1rem;
}

h2 {
  margin: 0 0 0.5rem;
  color: #1a3a5c;
  font-size: 1.3rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-bottom: 1.8rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  font-size: 0.75rem;
  color: #999;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.value {
  color: #222;
  font-size: 0.95rem;
}

/* Badges priorité */
.priority-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 600;
  white-space: nowrap;
}

.p-high { background: #fdecea; color: #c62828; }
.p-medium { background: #fff8e1; color: #f57f17; }
.p-low { background: #f1f8e9; color: #558b2f; }

/* Badges statut */
.status-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.s-todo { background: #eceff1; color: #607d8b; }
.s-progress { background: #e8f0fe; color: #1a3a5c; }
.s-blocked { background: #fff3e0; color: #e65100; }
.s-done { background: #e8f5e9; color: #2e7d32; }

.btn-kanban {
  display: inline-block;
  background: #f4a030;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 7px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.btn-kanban:hover {
  background: #d4891a;
}

.loading {
  color: #888;
  padding: 2rem 0;
}
</style>
