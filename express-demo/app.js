const express = require('express');
const app = express();
const http = require('http');

app.get('/hello', (request, response) => {
    response.send('Hello World!');
});


const server = http.createServer(app).listen(80);
console.log("Server listening on localhost:80");



















// app.use('/hello', require('./components/routes/helloWorld.js'));
