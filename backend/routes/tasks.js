const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Path to tasks data file
const dataPath = path.join(__dirname, "../data/tasks.json");

// GET all tasks (optionally filtered by projectId)
router.get("/", (req, res) => {
  let tasks = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  if (req.query.projectId) {
    tasks = tasks.filter((t) => t.projectId === parseInt(req.query.projectId));
  }
  res.json(tasks);
});

// GET a single task by ID
router.get("/:id", (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Tâche non trouvée" });
  res.json(task);
});

// POST a new task
router.post("/", (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  // Generate a new unique ID
  const newId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
  const newTask = { id: newId, ...req.body };
  tasks.push(newTask);
  fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
  res.status(201).json(newTask);
});

module.exports = router;
