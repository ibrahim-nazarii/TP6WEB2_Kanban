const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Path to projects data file
const dataPath = path.join(__dirname, "../data/projects.json");

// GET all projects
router.get("/", (req, res) => {
  const projects = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  res.json(projects);
});

// GET a single project by ID
router.get("/:id", (req, res) => {
  const projects = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  const project = projects.find((p) => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ error: "Projet non trouvé" });
  res.json(project);
});

module.exports = router;
