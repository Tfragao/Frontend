const express = require('express')
var bodyParser = require("body-parser");
const app = express()

app.use(express.static('publica')) 
app.use(bodyParser.json());

const port = 3000

let lista = [];
let lista2 = [];
let lista3 = [];

lista.push({"id":"1", "concepto":"ordenador", "importe":"300"});
lista.push({"id":"2", "concepto":"movil", "importe":"500"});
lista2.push({"id":"1", "concepto":"tablet", "importe":"900"});
lista3.push({"id":"1", "concepto":"televisor", "importe":"1500"});

app.get('/facturas', (req, res) => {

    res.send(lista);
})

app.get('/facturas2', (req, res) => {

  res.send(lista2);
})

app.get('/facturas3', (req, res) => {

  res.send(lista3);
})

app.post('/facturas', (req, res) => {
  
  lista.push(req.body);
  res.send(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})