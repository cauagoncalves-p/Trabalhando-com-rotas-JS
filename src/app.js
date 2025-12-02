const express = require('express');
const app = express();

app.use(express.json()); // Para ler o JSON no body

//Rotas
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

const userProdutos = require("./routes/produtos.routes");
app.use('/api/produtos', userProdutos)

module.exports = app;