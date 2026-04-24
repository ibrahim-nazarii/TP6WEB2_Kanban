<template>
  <!-- Carte individuelle affichée dans une colonne Kanban -->
  <RouterLink :to="`/tasks/${task.id}`" class="task-card-link">
    <div class="task-card">
      <div class="task-header">
        <span class="task-title">{{ task.title }}</span>
        <span :class="['priority-badge', priorityClass]">{{ task.priority }}</span>
      </div>
      <div class="task-meta">
        <span>👤 {{ task.responsible }}</span>
        <span class="task-role">{{ task.role }}</span>
      </div>
      <div class="task-deadline">📅 {{ task.deadline }}</div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    // Objet tâche avec titre, responsable, priorité, statut, etc.
    task: { type: Object, required: true },
  },
  computed: {
    // Classe CSS selon la priorité de la tâche
    priorityClass() {
      const map = {
        Haute: 'priority-high',
        Moyenne: 'priority-medium',
        Basse: 'priority-low',
      }
      return map[this.task.priority] || ''
    },
  },
}
</script>

<style scoped>
.task-card-link {
  text-decoration: none;
  display: block;
}

.task-card {
  background: white;
  border: 1px solid #dde3ea;
  border-radius: 8px;
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: box-shadow 0.15s, transform 0.1s;
}

.task-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transform: translateY(-1px);
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}

.task-title {
  font-weight: 600;
  color: #1a3a5c;
  font-size: 0.9rem;
  line-height: 1.3;
}

/* Badges de priorité */
.priority-badge {
  font-size: 0.68rem;
  padding: 2px 7px;
  border-radius: 10px;
  white-space: nowrap;
  font-weight: 600;
}

.priority-high {
  background: #fdecea;
  color: #c62828;
}

.priority-medium {
  background: #fff8e1;
  color: #f57f17;
}

.priority-low {
  background: #f1f8e9;
  color: #558b2f;
}

.task-meta {
  display: flex;
  flex-direction: column;
  font-size: 0.78rem;
  color: #666;
  gap: 2px;
}

.task-role {
  color: #999;
  font-style: italic;
}

.task-deadline {
  font-size: 0.75rem;
  color: #888;
}
</style>
