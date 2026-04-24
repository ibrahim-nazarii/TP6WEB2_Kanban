<template>
  <!-- Liste de tous les chantiers récupérés depuis l'API backend -->
  <div class="projects-view">
    <div class="page-header">
      <h2>Chantiers</h2>
      <span class="project-count" v-if="!loading">{{ projects.length }} chantier(s)</span>
    </div>

    <!-- État de chargement -->
    <div v-if="loading" class="loading">Chargement des chantiers...</div>

    <!-- Erreur de connexion au backend -->
    <div v-if="error" class="error-box">
      <strong>Erreur :</strong> {{ error }}
    </div>

    <!-- Grille de cartes de projets -->
    <div v-if="!loading && !error" class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'

export default {
  name: 'ProjectsView',
  components: { ProjectCard },
  data() {
    return {
      projects: [],
      loading: true,
      error: null,
    }
  },
  async mounted() {
    // Appel API GET /projects au backend Express
    try {
      const response = await fetch('http://localhost:3000/projects')
      if (!response.ok) throw new Error('Réponse serveur invalide')
      this.projects = await response.json()
    } catch (e) {
      this.error = 'Impossible de charger les chantiers. Vérifiez que le backend est lancé (port 3000).'
    } finally {
      this.loading = false
    }
  },
}
</script>

<style scoped>
.projects-view {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.page-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

h2 {
  color: #1a3a5c;
  margin: 0;
  font-size: 1.6rem;
}

.project-count {
  color: #888;
  font-size: 0.9rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 1.3rem;
}

.loading {
  color: #888;
  padding: 2rem 0;
}

.error-box {
  background: #fdecea;
  color: #c62828;
  border: 1px solid #f5c6c6;
  border-radius: 8px;
  padding: 1rem 1.2rem;
}
</style>
