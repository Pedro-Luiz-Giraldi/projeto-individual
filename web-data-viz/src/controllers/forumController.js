var forumModel = require("../models/forumModel");

function exibir(req, res) {
    var filtro = req.params.filtroServer

    forumModel.exibir(filtro).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function salvar(req, res) {
    var titulo = req.body.tituloServer;
    var comentario = req.body.comentarioServer;
    var categoria = req.body.categoriaServer;
    var usuario = req.body.usuarioServer;

    if (titulo == undefined || 
        titulo == '' || 
        comentario == undefined || 
        comentario == '' || 
        categoria == undefined || 
        categoria == '' ||
        usuario == undefined ||
        usuario == '' ) {
        res.status(400).send("Seu comentário ou categoria está indefinida!");
    } else {
        forumModel.salvar(titulo, comentario, categoria, usuario).then(function(resposta){
            res.status(200).send("Comentário salvo com sucesso");
        }).catch(function(erro){
            res.status(500).json(erro.sqlMessage);
        })
    }

}

module.exports = {
    exibir,
    salvar
}