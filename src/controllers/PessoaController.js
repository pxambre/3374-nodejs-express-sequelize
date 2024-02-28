const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();
class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async listaMatriculasAtivas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas = await pessoaServices.listarMatriculasAtivasPorEstudante(
        Number(estudante_id)
      );
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  async listaTodasAsMatriculas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas = await pessoaServices.listarTodasAsMatriculasPorEstudante(
        Number(estudante_id)
      );
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  async listarTodasPessoas(req, res) {
    try {
      const listasTodasPessoas =
        await pessoaServices.listarPessoasEscopoTodos();
      return res.status(200).json(listasTodasPessoas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = PessoaController;
