<template>
  <!-- Modale d'ajout d'une nouvelle tâche sur un chantier -->
  <div class="task-form-overlay" @click.self="$emit('close')">
    <div class="task-form">
      <h3>Ajouter une tâche</h3>
      <form @submit.prevent="submitForm">

        <!-- Titre de la tâche (v-model + validation) -->
        <div class="form-group">
          <label>Titre *</label>
          <input v-model="form.title" type="text" placeholder="Ex : Coulage dalle béton..." />
          <span v-if="errors.title" class="error">{{ errors.title }}</span>
        </div>

        <!-- Sélection du responsable parmi les profils disponibles -->
        <div class="form-group">
          <label>Responsable *</label>
          <select v-model="form.responsible">
            <option value="">-- Choisir un responsable --</option>
            <option value="Marie Durand">Marie Durand</option>
            <option value="Paul Martin">Paul Martin</option>
            <option value="Sophie Bernard">Sophie Bernard</option>
            <option value="Luc Petit">Luc Petit</option>
          </select>
          <span v-if="errors.responsible" class="error">{{ errors.responsible }}</span>
        </div>

        <!-- Rôle : chef de projet ou conducteur de travaux -->
        <div class="form-group">
          <label>Rôle *</label>
          <select v-model="form.role">
            <option value="chef de projet">Chef de projet</option>
            <option value="conducteur de travaux">Conducteur de travaux</option>
          </select>
        </div>

        <!-- Date d'échéance -->
        <div class="form-group">
          <label>Échéance *</label>
          <input v-model="form.deadline" type="date" />
          <span v-if="errors.deadline" class="error">{{ errors.deadline }}</span>
        </div>

        <!-- Niveau de priorité -->
        <div class="form-group">
          <label>Priorité</label>
          <select v-model="form.priority">
            <option value="Haute">Haute</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Basse">Basse</option>
          </select>
        </div>

        <!-- Statut initial de la tâche -->
        <div class="form-group">
          <label>Statut</label>
          <select v-model="form.status">
            <option value="À faire">À faire</option>
            <option value="En cours">En cours</option>
            <option value="Bloqué">Bloqué</option>
            <option value="Terminé">Terminé</option>
          </select>
        </div>

        <div class="form-actions">
          <button type="button" class="btn-cancel" @click="$emit('close')">Annuler</button>
          <button type="submit" class="btn-submit">Ajouter la tâche</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskForm',
  props: {
    // ID du projet auquel appartient la nouvelle tâche
    projectId: { type: Number, required: true },
  },
  emits: ['close', 'task-added'],
  data() {
    return {
      // Champs du formulaire liés via v-model
      form: {
        title: '',
        responsible: '',
        role: 'conducteur de travaux',
        deadline: '',
        priority: 'Moyenne',
        status: 'À faire',
      },
      errors: {},
    }
  },
  methods: {
    // Validation minimale avant envoi au backend
    validate() {
      this.errors = {}
      if (!this.form.title.trim()) this.errors.title = 'Le titre est requis.'
      if (!this.form.responsible) this.errors.responsible = 'Choisissez un responsable.'
      if (!this.form.deadline) this.errors.deadline = "L'échéance est requise."
      return Object.keys(this.errors).length === 0
    },

    async submitForm() {
      if (!this.validate()) return
      // Envoi de la nouvelle tâche via POST au backend Express
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...this.form, projectId: this.projectId }),
      })
      const newTask = await response.json()
      // Notifie la vue parente pour mettre à jour la liste localement
      this.$emit('task-added', newTask)
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.task-form-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.task-form {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 440px;
  max-width: 95vw;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

h3 {
  margin: 0 0 1.4rem;
  color: #1a3a5c;
  font-size: 1.1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  font-size: 0.82rem;
  color: #555;
  margin-bottom: 5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

input,
select {
  padding: 0.5rem 0.7rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
  transition: border-color 0.2s;
}

input:focus,
select:focus {
  outline: none;
  border-color: #1a3a5c;
  box-shadow: 0 0 0 2px rgba(26, 58, 92, 0.15);
}

.error {
  color: #c62828;
  font-size: 0.78rem;
  margin-top: 3px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  margin-top: 1.4rem;
}

.btn-cancel {
  padding: 0.45rem 1.1rem;
  border: 1px solid #ccc;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.btn-cancel:hover {
  background: #f5f5f5;
}

.btn-submit {
  padding: 0.45rem 1.3rem;
  background: #f4a030;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.btn-submit:hover {
  background: #d4891a;
}
</style>
