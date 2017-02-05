const express = require('express');

let api = express.Router();

api.get('/', (request, response) => {
    response.send('Hello World!');
})

module.exports = api;
