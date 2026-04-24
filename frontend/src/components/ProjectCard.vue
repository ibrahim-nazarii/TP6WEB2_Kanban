<template>
  <!-- Carte résumant un chantier / projet BTP -->
  <div class="project-card">
    <div class="card-header">
      <h3>{{ project.name }}</h3>
      <span :class="['status-badge', statusClass]">{{ project.status }}</span>
    </div>
    <p class="location">📍 {{ project.location }}</p>
    <p class="description">{{ project.description }}</p>
    <div class="card-meta">
      <span>👷 Chef de projet : <strong>{{ project.chefProjet }}</strong></span>
      <span>🔧 Conducteur : <strong>{{ project.conducteurTravaux }}</strong></span>
    </div>
    <div class="card-dates">
      <span>Du {{ project.startDate }}</span>
      <span>Au {{ project.endDate }}</span>
    </div>
    <!-- Lien vers le tableau Kanban de ce chantier -->
    <RouterLink :to="`/kanban/${project.id}`" class="btn-kanban">
      Voir le Kanban →
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    // Objet projet transmis depuis la vue parente
    project: { type: Object, required: true },
  },
  computed: {
    // Classe CSS dynamique selon le statut du projet
    statusClass() {
      const map = {
        'En cours': 'status-progress',
        'À démarrer': 'status-todo',
        'Terminé': 'status-done',
      }
      return map[this.project.status] || ''
    },
  },
}
</script>

<style scoped>
.project-card {
  background: white;
  border: 1px solid #dde3ea;
  border-radius: 10px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  transition: transform 0.15s, box-shadow 0.15s;
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}

h3 {
  margin: 0;
  color: #1a3a5c;
  font-size: 1.05rem;
}

/* Badges de statut */
.status-badge {
  font-size: 0.72rem;
  padding: 3px 10px;
  border-radius: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.status-progress {
  background: #e8f0fe;
  color: #1a3a5c;
}

.status-todo {
  background: #fff3e0;
  color: #e65100;
}

.status-done {
  background: #e8f5e9;
  color: #2e7d32;
}

.location {
  color: #777;
  font-size: 0.88rem;
  margin: 0;
}

.description {
  color: #444;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}

.card-meta {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 0.83rem;
  color: #555;
}

.card-dates {
  display: flex;
  gap: 1rem;
  font-size: 0.82rem;
  color: #888;
}

.btn-kanban {
  margin-top: 0.4rem;
  display: inline-block;
  background: #f4a030;
  color: white;
  padding: 0.45rem 1.1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  align-self: flex-start;
  transition: background 0.2s;
}

.btn-kanban:hover {
  background: #d4891a;
}
</style>
