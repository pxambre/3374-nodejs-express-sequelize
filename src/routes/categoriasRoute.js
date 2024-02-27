const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();

const router = Router();

router.get('/categorias', (req, res) => categoriaController.listarTodos(req, res));
router.get('/categorias/:id', (req, res) => categoriaController.listarUmPorId(req, res));
router.post('/categorias', (req, res) => categoriaController.criar(req, res));
router.put('/categorias/:id', (req, res) => categoriaController.atualizar(req, res));
router.delete('/categorias/:id', (req, res) => categoriaController.remover(req, res));

module.exports = router;
