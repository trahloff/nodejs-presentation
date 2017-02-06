const express = require('express');
const app = express();
const http = require('http');

app.use('/database', require('./components/routes/database'));


const server = http.createServer(app).listen(80);
console.log("Server listening on localhost:80");
