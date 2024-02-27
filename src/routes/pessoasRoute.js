const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js')

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.listarTodos(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.listarUmPorId(req, res));
router.post('/pessoas', (req, res) => pessoaController.criar(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualizar(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.remover(req, res));

router.get('/pessoas/:estudanteId/matriculas', (req, res) => pessoaController.listaMatriculas(req, res));
router.post('/pessoas/:estudanteId/matriculas', (req, res) => matriculaController.criar(req, res));

module.exports = router;
