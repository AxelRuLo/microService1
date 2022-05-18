var express = require('express');
var app = express();
const port = process.env.PORT || 3000
const pokemones = require("./routes/pokemons")



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/pokemon",pokemones)

app.listen(port, function () {
  console.log(`funcinando en el puerto ${port}`)
});