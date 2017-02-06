const express = require('express');
const app = express();
const http = require('http');


/* -------------------------Express Config------------------------- */
app
    .use('/', express.static('./public'))
    .use('/node_modules', express.static('./node_modules'))
    .use('/database', require('./components/routes/database'));

const server = http.createServer(app).listen(80);
console.log("Server listening on localhost:80");
