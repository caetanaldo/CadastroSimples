const Usuario = require("../models/Usuario");

module.exports = {
    async criar(req, res){
        const { nome, senha } = req.body;
        const novo = Usuario.criar(nome, senha);
        res.json(novo);
    }
};