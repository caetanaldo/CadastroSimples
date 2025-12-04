const express = require("express");
const UsuarioController = require("../controllers/UsuarioController");

const rotas = express.Router();

// Rota de cadastro de usuario
rotas.post("/", UsuarioController.criar);

module.exports = rotas;