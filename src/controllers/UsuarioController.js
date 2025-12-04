const Usuario = require("../models/Usuario");

module.exports = {
    async criar(req, res){
        const { nome, senha } = req.body;
        const novo = Usuario.criar(nome, senha);
        res.json(novo);
    },

    async listar(req, res){
        const dados = await Usuario.listar();
        res.json(dados);
    },

    async atualizar(req, res){
        const {id} = req.params;
        const {nome,senha} = req.body;
        const atualizado = await Usuario.atualizar(id, nome, senha);
    }
};