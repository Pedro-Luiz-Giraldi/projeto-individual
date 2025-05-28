var database = require("../database/config")

function exibir(filtro) {
    var instrucao = `
        SELECT * FROM forum WHERE categoria = ${filtro};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function salvar(comentario) {
    var instrucao = `
        INSERT INTO forum (comentario) VALUES ('${comentario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvar,
    exibir
};