var database = require("../database/config")

function exibir(filtro) {
    if (filtro == '*') {
        var instrucao = `
            SELECT f.titulo, f.comentario, f.categoria, u.nome
            FROM forum f
            JOIN usuario u 
            WHERE f.fkusuario = u.id;
        `;
    } else {
        var instrucao = `
            SELECT f.titulo, f.comentario, f.categoria, u.nome
            FROM forum f
            JOIN usuario u 
            WHERE f.fkusuario = u.id
            AND categoria = '${filtro}';
        `;
    }

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function salvar(titulo, comentario, categoria, usuario) {
    var instrucao = `
        INSERT INTO forum (titulo, comentario, categoria, fkusuario) VALUES ('${titulo}', '${comentario}', '${categoria}', ${usuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvar,
    exibir
};