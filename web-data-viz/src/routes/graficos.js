var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/obterNpc", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    graficoController.obterNpc(req, res);
});

router.get("/obterCategoria", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    graficoController.obterCategoria(req, res);
});

module.exports = router;