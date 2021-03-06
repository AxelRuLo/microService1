var express = require('express');
var app = express();
const port = process.env.PORT || 3000
const pokemones = require("./routes/pokemons")
const files = require("./routes/files")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/pokemon",pokemones)
app.use("/",files)

app.listen(port, function () {
  console.log(`funcinando en el puerto ${port}`)
});