<template>
  <!-- Colonne Kanban réutilisable affichant les tâches d'un statut donné -->
  <div class="kanban-column">
    <div class="column-header" :style="{ borderTopColor: columnColor }">
      <h3 class="column-title">{{ title }}</h3>
      <span class="task-count">{{ tasks.length }}</span>
    </div>
    <div class="column-body">
      <!-- Affiche une TaskCard pour chaque tâche de la colonne -->
      <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
      <p v-if="tasks.length === 0" class="empty-column">Aucune tâche</p>
    </div>
  </div>
</template>

<script>
import TaskCard from './TaskCard.vue'

export default {
  name: 'KanbanColumn',
  components: { TaskCard },
  props: {
    title: { type: String, required: true },         // Libellé de la colonne
    tasks: { type: Array, required: true },          // Tâches appartenant à cette colonne
    columnColor: { type: String, default: '#1a3a5c' }, // Couleur du bandeau supérieur
  },
}
</script>

<style scoped>
.kanban-column {
  background: #f5f7fa;
  border-radius: 10px;
  min-width: 240px;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 300px;
}

.column-header {
  border-top: 4px solid;
  border-radius: 10px 10px 0 0;
  padding: 0.9rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eef1f5;
}

.column-title {
  margin: 0;
  font-size: 0.95rem;
  color: #1a3a5c;
  font-weight: 700;
}

/* Compteur de tâches dans le badge rond */
.task-count {
  background: #1a3a5c;
  color: white;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: bold;
  flex-shrink: 0;
}

.column-body {
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

.empty-column {
  text-align: center;
  color: #bbb;
  font-size: 0.83rem;
  padding: 1.5rem 0;
}
</style>
