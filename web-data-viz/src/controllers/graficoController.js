var graficoModel = require("../models/graficoModel");

function obterNpc(req, res) {
    graficoModel.obterNpc().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function obterCategoria(req, res) {
    graficoModel.obterCategoria().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    obterNpc,
    obterCategoria
}