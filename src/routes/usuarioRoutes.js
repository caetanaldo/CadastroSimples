const express = require("express");
const UsuarioController = require("../controllers/UsuarioController");

const rotas = express.Router();

// Rota de cadastro de usuario
rotas.post("/", UsuarioController.criar);
rotas.get("/", UsuarioController.listar);
rotas.put("/:id", UsuarioController.atualizar);
rotas.delete("/:id", UsuarioController.deletar);
rotas.post("/login", UsuarioController.login);


module.exports = rotas;