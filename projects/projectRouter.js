/*holds endpoints .GET.POST.DELETE.PUT

[ ] Build an API with endpoints for:
    -   [ ] adding resources. .POST
    -   [ ] retrieving a list of resources. .GET
    -   [ ] adding projects. .POST
    -   [ ] retrieving a list of projects. .GET
    -   [ ] adding tasks. .POST
    -   [ ] retrieving a list of tasks. .GETN **The list of tasks should include the project name and project description**.
*/
const express = require('express');

const Projects = require('./projectModel');

const router = express.Router();


//working, replace with the projects
router.get('/', (req,res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(error => {
        res.status(500).json({message: 'unable to get projects'})
    })
})

router.get('/resources', (req,res) => {
    Projects.getResources()
    .then(resource=> {
        res.status(200).json(resource);
    })
    .catch(error => {
        res.status(500).json({message: 'unable to get resources'})
    })
})
router.get('/tasks', (req,res) => {
    Projects.getTasks()
    .then(task=> {
        res.status(200).json(task);
    })
    .catch(error => {
        res.status(500).json({message: 'unable to get resources'})
    })
})

router.post('/', (req,res) => {
    
})



module.exports = router;