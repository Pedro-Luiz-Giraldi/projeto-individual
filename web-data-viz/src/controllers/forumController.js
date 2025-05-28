var forumModel = require("../models/forumModel");

function exibir(req, res) {
    var filtro = req.body.ipt_filtro

    forumModel.exibir(filtro).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function salvar(req, res) {
    var comentario = req.body.ipt_comentario;

    if (comentario == undefined || comentario == '') {
        res.status(400).send("Seu comentário está indefinido!");
    }

    forumModel.salvar(comentario).then(function(resposta){
        res.status(200).send("Comentário salvo com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    exibir,
    salvar
}