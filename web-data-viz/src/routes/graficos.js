var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/obterDados", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    graficoController.obterDados(req, res);
});

module.exports = router;