const express = require("express");
const UsuarioController = require("../controllers/UsuarioController");

const rotas = express.Router();

// Rota de cadastro de usuario
rotas.post("/", UsuarioController.criar);
rotas.get("/", UsuarioController.listar);
rotas.put("/:id", UsuarioController.atualizar);


module.exports = rotas;