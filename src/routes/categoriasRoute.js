const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();

const router = Router();

router.get('/cursos', (req, res) => categoriaController.listarTodos(req, res));
router.get('/cursos/:id', (req, res) => categoriaController.listarUmPorId(req, res));
router.post('/cursos', (req, res) => categoriaController.criar(req, res));
router.put('/cursos/:id', (req, res) => categoriaController.atualizar(req, res));
router.delete('/cursos/:id', (req, res) => categoriaController.remover(req, res));

module.exports = router;
