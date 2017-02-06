const express = require('express');

let api = express.Router();
let besucherAnzahl = 0;

api.get('/', (request, response) => {
    besucherAnzahl++;
    response.send('Hallo! Sie sind Besucher Nummer ' + besucherAnzahl);
});

module.exports = api;
