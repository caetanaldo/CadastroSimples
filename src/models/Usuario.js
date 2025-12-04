const bcrypt = require("bcrypt");
const db = require("../configs/database");

const Usuario = {
    // Função de Criar DENTRO do banco de dados
    criar: async (nome, senha) => {
        console.log("Tentando fazer o cadastro de ", nome);
        try{
            const hash = await bcrypt.hash(senha, 10);
            return db.one("INSERT INTO usuarios (nome, senha) VALUES ($1, $2) RETURNING id, nome", [nome, hash]);
        }catch (err){
            console.log("DEU ERRO! : ", err);
            return err;
        }
    },
    // Função de listar DENTRO do banco de dados
    listar: () => db.any("SELECT id, nome FROM usuarios"),
    // Função de atualixar DENTRO do banco de dados
    atualizar: async(id, nome, senha) => {
        const hash = await bcrypt.hash(senha,10);
        try{
            return db.one("UPDATE usuarios SET nome=$1 senha=$2 WHERE id=$3 RETURNING id, nome", [nome, hash, id]);
        }catch (err){
            console.log("DEU ERRO! : ", err);
            return err;
        }
    }

};

module.exports = Usuario;