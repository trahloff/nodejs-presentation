const fs = require('fs');

let tier;

fs.readFile('./tier.txt', 'utf8', (err, data) => {
    tier = data;
    console.log('Wert von "tier" im Callback: '+tier);
});
console.log('Wert von "tier" außerhalb des Callbacks: '+tier);
