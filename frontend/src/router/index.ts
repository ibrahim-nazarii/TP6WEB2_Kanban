import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import KanbanView from '../views/KanbanView.vue'
import TaskDetailView from '../views/TaskDetailView.vue'

// Déclaration des routes de l'application BuildFlow
const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: ProjectsView },
  { path: '/kanban/:id', component: KanbanView },      // Tableau Kanban d'un chantier
  { path: '/tasks/:id', component: TaskDetailView },   // Détail d'une tâche
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
