const bcrypt = require("bcrypt");
const db = require("../configs/database");

const Usuario = {
    criar: async (nome, senha) => {
        console.log("Tentando fazer o cadastro de ", nome);
        try{
            const hash = await bcrypt.hash(senha, 10);
            return db.one("INSERT INTO usuarios (nome, senha) VALUES ($1, $2) RETURNING id, nome", [nome, hash]);
        }catch (err){
            console.log("DEU ERRO! : ", err);
            return err;
        }
    }
};

module.exports = Usuario;