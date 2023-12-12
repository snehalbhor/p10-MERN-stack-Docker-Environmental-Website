const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectToMongo = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectToMongo();

const projectSchema = new mongoose.Schema({
  name: String,
});

const Project = mongoose.model("Project", projectSchema);

app.get("/api/projects", async (req, res) => {
  try {
    console.log("reach here");
    const projects = await Project.find();
    console.log(projects);

    if (projects.length > 0) {
      console.log(typeof projects[0]);
      console.log(projects[0]);

      res.json(projects[0]);
    } else {
      res.status(404).json({ error: "No projects found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
