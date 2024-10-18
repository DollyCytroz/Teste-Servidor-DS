const Sequelize = require("sequelize");
const conexaoComBanco = new Sequelize("teste", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

const Postagem = conexaoComBanco.define("postagens", {
    titulo: {
        type: Sequelize.STRING,
    },
    conteudo: {
        type: Sequelize.TEXT,
    },
});

Postagem.create({
    titulo: "Um titulo qualquer",
    conteudo: "Um conteudo qualquer",
  });