const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Allow requests from Vue frontend (port 5173)
app.use(cors());
app.use(express.json());

// Mount routes
const projectsRouter = require("./routes/projects");
const tasksRouter = require("./routes/tasks");

app.use("/projects", projectsRouter);
app.use("/tasks", tasksRouter);

// Root health check
app.get("/", (req, res) => {
  res.json({ message: "BuildFlow API is running" });
});

app.listen(PORT, () => {
  console.log(`BuildFlow backend running on http://localhost:${PORT}`);
});
