const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.listarTodos(req, res));
router.get('/pessoas/todos', (req, res) => pessoaController.listarTodasPessoas(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.listarUmPorId(req, res));
router.post('/pessoas', (req, res) => pessoaController.criar(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualizar(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.remover(req, res));

router.get('/pessoas/:estudante_id/matriculas', (req, res) => pessoaController.listaMatriculasAtivas(req, res));
router.get('/pessoas/:estudante_id/matriculas/todos', (req, res) => pessoaController.listaTodasAsMatriculas(req, res));
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.listarUmRegisto(req, res));
router.post('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.criar(req, res));
router.put('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.atualizar(req, res));
router.delete('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.remover(req, res));


module.exports = router;
