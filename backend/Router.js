const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectToMongo = require("./connectToMongo");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectToMongo();

const projectSchema = new mongoose.Schema({
  name: String,
});

const Project = mongoose.model("Project", projectSchema);

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
