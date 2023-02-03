const express = require('express')
const app = express()
app.use(express.static('publica')) 
const port = 3000

let lista = [];

lista.push({"id":"1", "concepto":"ordenador", "importe":"300"});
lista.push({"id":"2", "concepto":"movil", "importe":"500"});
lista.push({"id":"3", "concepto":"tablet", "importe":"900"});

let lista2 = [];

lista2.push({"id":"1", "concepto":"ordenador", "importe":"600"});
lista2.push({"id":"2", "concepto":"movil", "importe":"1000"});
lista2.push({"id":"3", "concepto":"tablet", "importe":"1800"});

app.get('/facturas', (req, res) => {

  setTimeout(function(){
    res.send(lista);
  }, 2000)
  
})

app.get('/facturas2', (req, res) => {

  setTimeout(function(){
    res.send(lista2);
  },4000)
  
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})