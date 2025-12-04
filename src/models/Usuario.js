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

    // Função de atualiza DENTRO do banco de dados
    atualizar: async(id, nome, senha) => {
        const hash = await bcrypt.hash(senha,10);
        try{
            return db.one("UPDATE usuarios SET nome=$1 senha=$2 WHERE id=$3 RETURNING id, nome", [nome, hash, id]);
        }catch (err){
            console.log("DEU ERRO! : ", err);
            return err;
        }
    },

    // Função que deleta DENTRO do banco de dados
    deletar: (id) => db.none("DELETE FROM usuarios WHERE id=$1", [id]),

    // Função que faz o login
    login: async (nome, senha) => {
        const user = await db.oneOrNone("SELECT * FROM usuarios WHERE nome=$1", [nome]);
        
        if (!user){
            return null;
        }
        const senhaCorreta = await bcrypt.compare(senha, user.senha);
        if (!senhaCorreta){
            console.log("Credenciais inválidas!");
            return null;
        }
        return {id: user.id, nome:user.nome};
    }

};

module.exports = Usuario;