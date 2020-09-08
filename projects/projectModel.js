const db = require('../dbconfig');

function findProject() {
    return db('projects');
}

function findProjectById(id){
    return db('projects')
    .where({id})
    .first();
}

function findResource() {
    return db('resource');
}

function findResourceById(id) {
    return db('resource')
    .where({id})
    .first();
}

function findTasks() {
    return db('task')
}

function findTasksById(id){
    return db('task')
    .where({id})
    .first();
}

function addProject(project){
    return db('projects')
    .insert(project)
    .then(ids => {
        return findProjectById(ids[0]);
    })
}

function addResource(resource){
    return db('resource')
    .insert(resource)
    .then(ids => {
        return findResourceById(ids[0]);
    })
}

function addTask(task){
    return db('task')
    .insert(task)
    .then(ids => {
        return findTasksById(ids[0]);
    })
}

module.exports = {
    findProject,
    findProjectById,
    findResource,
    findResourceById,
    findTasks,
    findTasksById,
    addProject,
    addResource,
    addTask,
}
