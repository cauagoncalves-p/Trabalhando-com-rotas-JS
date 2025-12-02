const express = require('express');
const router = express.Router();
const ProdutosController = require("../controllers/produtos.controller");

router.get('/', ProdutosController.listProdutos);
router.get('/:id', ProdutosController.getProdutos);
router.post('/', ProdutosController.postProdutos);

module.exports = router;