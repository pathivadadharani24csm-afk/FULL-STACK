const fs = require('fs');
fs.readFile('text.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  else{
    console.log(data);
  }
    const txt = "He rules latveria and try to conqure the multi-verse"
    fs.writeFile('text.txt', txt, (err) => {
    if (err) throw err;
    else{
        console.log("File written successfully");
    }
    fs.appendFile('text.txt', '\nHe is a supervillain', (err) => {
    if (err) throw err;
    else{
        console.log("File appended successfully");
    }
        })
    })
})

fs.unlink('text.txt', err => {
  if (err) throw err;
  console.log('File was deleted.');
});
