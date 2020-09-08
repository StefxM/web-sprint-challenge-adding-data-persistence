/*holds endpoints .GET.POST.DELETE.PUT

[ ] Build an API with endpoints for:
    -   [ ] adding resources. .POST
    -   [ ] retrieving a list of resources. .GET
    -   [ ] adding projects. .POST
    -   [ ] retrieving a list of projects. .GET
    -   [ ] adding tasks. .POST
    -   [ ] retrieving a list of tasks. .GETN **The list of tasks should include the project name and project description**.
*/
const express = require("express");

const db = require("./projectModel");

const router = express.Router();

router.post("/", async (req, res) => {
  const projectData = req.body;

  db.addProject(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "cannot add project" });
    });
});
router.get("/", async (req, res) => {
  await db
    .findProject()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Cant retrieve projects" });
    });
});

router.post("/resources", async (req, res) => {
  const resourcesData = req.body;

  await db
    .addResource(resourcesData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "cannot add resource" });
    });
});

router.get("/resources", async (req, res) => {
  await db
    .findResource()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "cant retrieve resources" });
    });
});

router.post("/tasks", async (req, res) => {
  const taskData = req.body;

  await db
    .addTask(taskData)
    .then((tasks) => {
      res.status(201).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "cannot add task" });
    });
});

router.get("/:id/tasks", async (req, res) => {
  try {
    const tasks = await db.findTaskByProject(req.params.id)
   .join('projects', {'project_id': 'projects.id'})
   .select('task.*', 'projects.project_name', 'projects.description')
    res.json(tasks);
  } catch(e) {
      console.log(e)
    res.status(500).json({ message: "cant retrieve tasks" });
  }
});
module.exports = router;
