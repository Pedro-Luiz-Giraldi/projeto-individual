var express = require("express");
var router = express.Router();

var forumController = require("../controllers/forumController");

router.post("/salvar", function (req, res) {
    // função a ser chamada quando acessar /carros/salvar
    forumController.salvar(req, res);
});

router.get("/exibir", function (req, res) {
    // função a ser chamada quando acessar /carros/exibir
    carroController.exibir(req, res);
});

module.exports = router;