const db = require('../dbconfig');

function getProjects(){
    return db.select('*').from('projects')
}

function getResources(){
    return db.select('*').from('resource')
}
function getTasks(){
    return db.select('*').from('task').join('projects')
}

function addResource(){
    return db('resource')
        .insert(resource)
        .then(ids => {
            return 
        })
}
module.exports = {
    getProjects,
    getResources,
    getTasks
}