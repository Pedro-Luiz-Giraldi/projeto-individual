var express = require("express");
var router = express.Router();

var forumController = require("../controllers/forumController");

router.post("/salvar", function (req, res) {
    forumController.salvar(req, res);
});

router.get("/exibir/:filtroServer", function (req, res) {
    forumController.exibir(req, res);
});

module.exports = router;