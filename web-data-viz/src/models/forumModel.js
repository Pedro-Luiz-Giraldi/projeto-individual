var database = require("../database/config")

function exibir(filtro) {
    if (filtro == '*') {
        var instrucao = `
            SELECT * FROM forum;
        `;
    } else {
        var instrucao = `
            SELECT * FROM forum WHERE categoria = '${filtro}';
        `;
    }

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function salvar(comentario, categoria, usuario) {
    var instrucao = `
        INSERT INTO forum (comentario, categoria, fkusuario) VALUES ('${comentario}', '${categoria}', ${usuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvar,
    exibir
};