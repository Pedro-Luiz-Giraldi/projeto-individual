var express = require("express");
var router = express.Router();

var forumController = require("../controllers/forumController");

router.post("/salvar", function (req, res) {
    // função a ser chamada quando acessar /carros/salvar
    forumController.salvar(req, res);
});

router.get("/exibir/:filtroServer", function (req, res) {
    // função a ser chamada quando acessar /carros/exibir
    forumController.exibir(req, res);
});

module.exports = router;