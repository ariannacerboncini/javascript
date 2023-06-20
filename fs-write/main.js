const fs = require('fs');

fs.writeFile('message.txt', 'È a monte che dobbiamo distruggere', (err) => {
    if (err) throw err;
    console.log('Il file è stato creato!');
});