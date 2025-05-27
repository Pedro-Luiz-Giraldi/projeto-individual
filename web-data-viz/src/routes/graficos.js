var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/obterNpc", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    graficoController.obterNpc(req, res);
});

module.exports = router;