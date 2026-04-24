<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <!-- Layout global : Navbar toujours visible + vue courante via RouterView -->
  <div id="app">
    <Navbar />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f0f2f5;
  color: #222;
}

.main-content {
  min-height: calc(100vh - 60px);
}
</style>
