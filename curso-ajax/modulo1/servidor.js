const express = require('express')
const app = express()
app.use(express.static('publica')) // Para que el servidor pueda disponer de la carpeta publica
const port = 3000

app.get('/', (req, res) => {
  res.send('Bienvendio al curso de Ajax')
})

app.get('/ajax1', (req, res) => {

  setTimeout(function(){
    res.send('Hola desde ajax1');
  }, 5000);
  
})

app.get('/ajax2', (req, res) => {
  res.send('<p>Hola desde Ajax2</p>');
})

app.get('/ajaxxml', (req, res) => {
  res.send('<mensaje>Hola desde ajax con xml</mensaje>');
})

app.get('/ajaxjson', (req, res) => {
  res.send({"mensaje" : "Hola desde json"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})