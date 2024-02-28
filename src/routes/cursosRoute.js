const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursoController = new CursoController();

const router = Router();

router.get('/cursos', (req, res) => cursoController.pegaCursos(req, res));
router.get('/cursos/:id', (req, res) => cursoController.listarUmPorId(req, res));
router.post('/cursos', (req, res) => cursoController.criar(req, res));
router.put('/cursos/:id', (req, res) => cursoController.atualizar(req, res));
router.delete('/cursos/:id', (req, res) => cursoController.remover(req, res));

module.exports = router;
