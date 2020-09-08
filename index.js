const express = require('express');
const projectRouter = require('./projects/projectRouter')
const server = express();
const port = 5000;

server.use(express.json());

server.use('/api/projects', projectRouter);

server.get('/', (req,res) => {
    res.send(`<h2>Server up and running</h2>`)
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})