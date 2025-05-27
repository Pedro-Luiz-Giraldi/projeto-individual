var database = require("../database/config")

function obterNpc() {
    var instrucao = `
        SELECT fav_npc FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    obterNpc
}