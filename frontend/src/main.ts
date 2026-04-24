import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Création de l'application Vue avec le router activé
const app = createApp(App)
app.use(router)
app.mount('#app')
