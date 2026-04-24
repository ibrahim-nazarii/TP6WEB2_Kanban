<template>
  <!-- Barre de navigation principale de BuildFlow -->
  <nav class="navbar">
    <div class="navbar-brand">
      <span class="brand-icon">🏗️</span>
      <span class="brand-name">BuildFlow</span>
    </div>
    <ul class="navbar-links">
      <li><RouterLink to="/">Accueil</RouterLink></li>
      <li><RouterLink to="/projects">Chantiers</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a3a5c; /* Bleu BTP profond */
  padding: 0 2rem;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.brand-icon {
  font-size: 1.5rem;
}

.navbar-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-links a {
  color: #cdd8e3;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.navbar-links a:hover,
.navbar-links a.router-link-active {
  color: #f4a030; /* Orange BTP */
}
</style>
