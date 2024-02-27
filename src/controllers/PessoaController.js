const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();
class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async listaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoaServices.listarMatriculasPorEstudante(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
    } catch (error) {
      //tratar erros
    }
  }
}

module.exports = PessoaController;
