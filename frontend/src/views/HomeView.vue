<template>
  <!-- Page d'accueil présentant BuildFlow et ses fonctionnalités -->
  <div class="home">
    <section class="hero">
      <div class="hero-badge">Application BTP</div>
      <h1>BuildFlow</h1>
      <p class="subtitle">Suivez vos chantiers avec clarté et efficacité.</p>
      <p class="description">
        BuildFlow centralise le suivi de vos projets de construction. Visualisez l'avancement
        de chaque chantier grâce à des tableaux Kanban clairs, identifiez les blocages et
        gérez vos équipes en temps réel.
      </p>
      <div class="hero-actions">
        <RouterLink to="/projects" class="btn-primary">Voir les chantiers →</RouterLink>
      </div>
    </section>

    <!-- Présentation des fonctionnalités principales -->
    <section class="features">
      <div class="feature-card">
        <span class="feature-icon">📋</span>
        <h3>Suivi Kanban</h3>
        <p>4 colonnes claires : À faire, En cours, Bloqué, Terminé. Vue instantanée de l'avancement.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">🏗️</span>
        <h3>Multi-chantiers</h3>
        <p>Gérez plusieurs projets simultanément avec leurs équipes et tâches dédiées.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">🔍</span>
        <h3>Filtrage rapide</h3>
        <p>Trouvez en un clic les tâches critiques par priorité, statut ou mot-clé.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">👷</span>
        <h3>Profils métier</h3>
        <p>Assignez vos tâches aux chefs de projet et conducteurs de travaux.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  max-width: 960px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

/* Section héro */
.hero {
  text-align: center;
  padding: 3.5rem 0 2.5rem;
}

.hero-badge {
  display: inline-block;
  background: #fff3e0;
  color: #e65100;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 1rem;
}

h1 {
  font-size: 3rem;
  color: #1a3a5c;
  margin: 0 0 0.4rem;
  letter-spacing: -1px;
}

.subtitle {
  font-size: 1.25rem;
  color: #f4a030;
  font-weight: 600;
  margin: 0 0 1rem;
}

.description {
  color: #555;
  max-width: 580px;
  margin: 0 auto 2rem;
  line-height: 1.7;
  font-size: 1rem;
}

.hero-actions {
  margin-top: 1.5rem;
}

.btn-primary {
  background: #1a3a5c;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.2s, transform 0.1s;
  display: inline-block;
}

.btn-primary:hover {
  background: #142d47;
  transform: translateY(-2px);
}

/* Grille de fonctionnalités */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.2rem;
  margin-top: 3.5rem;
}

.feature-card {
  background: white;
  border: 1px solid #dde3ea;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.15s, box-shadow 0.15s;
}

.feature-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.feature-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.6rem;
}

.feature-card h3 {
  color: #1a3a5c;
  margin: 0 0 0.5rem;
  font-size: 1rem;
}

.feature-card p {
  color: #666;
  font-size: 0.88rem;
  line-height: 1.5;
  margin: 0;
}
</style>
