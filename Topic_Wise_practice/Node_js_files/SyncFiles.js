const fs = require('fs');
data = fs.readFileSync('text.txt', 'utf-8');
console.log(data);
const txt = "He rules latveria and try to conqure the multi-verse"
fs.writeFileSync('text.txt', txt)
fs.appendFileSync('text.txt', '\nHe is a supervillain')