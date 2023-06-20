const express = require('express');
const app = express();

app.get('/', function (req, res) { // get serve per esporre un testo
    res.send('Hello, world!');
});

app.get('/about', function (req, res) { // get serve per esporre un testo
    res.send('Questa è la pagina "About"!');
});

app.listen(3000, function () { 
    console.log('Il server è in ascolto sulla porta 3000!');
});