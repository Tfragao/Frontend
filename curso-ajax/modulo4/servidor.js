const express = require('express')
var bodyParser = require("body-parser");
const app = express()

app.use(express.static('publica')) 
app.use(bodyParser.json());

const port = 3000

let lista = [];

lista.push({"id":"1", "concepto":"ordenador", "importe":"300"});
lista.push({"id":"2", "concepto":"movil", "importe":"500"});

app.get('/facturas', (req, res) => {

    res.send(lista);
})

app.post('/facturas', (req, res) => {
  
  lista.push(req.body);
  res.send(req.body);
})

app.delete('/facturas/:id', (req, res) => {

  let facturaBorrar = lista.find(function(item){
      if (item.id == req.params.id) {
        return true;
      }
  })

  let indice = lista.indexOf(facturaBorrar);
  lista.splice(indice, 1);
  res.status(204).send();
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})