//holds endpoints .GET.POST.DELETE.PUT

const express = require('express');

//const Projects = require('./projectModel');

const router = express.Router();


//working, replace with the projects
router.get('/', (req,res) => {
    res.send(`<h2>projects!</h2>`)
})

module.exports = router;