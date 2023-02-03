const express = require('express')
const app = express()
app.use(express.static('publica')) 
const port = 3000

let lista = [];

lista.push({"id":"1", "concepto":"ordenador", "importe":"300"});
lista.push({"id":"2", "concepto":"movil", "importe":"500"});
lista.push({"id":"3", "concepto":"tablet", "importe":"900"});

app.get('/facturas', (req, res) => {
  res.send(lista);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})