const Sequelize = require('sequelize');
const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculaServices = new MatriculaServices();
class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }

  async listaMatriculasPorEstudante(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculasPorEstudante = await matriculaServices.numeroTotalDeRegistos({
        where: {
          estudante_id: Number(estudante_id),
          status: 'matriculado'
        },
        limit: 5,
        order: [['id', 'ASC']]
      });
      return res.status(200).json(listaMatriculasPorEstudante);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async listaCursosLotados(req, res) {
    const lotacaoCurso = 2;
    try {
      const cursosLotados = await matriculaServices.numeroTotalDeRegistos({
        where: {
          status: 'matriculado'
        },
        attributes: ['curso_id'],
        group: ['curso_id'],
        having: Sequelize.literal(`count(curso_id) >= ${lotacaoCurso}`)
      });
      return res.status(200).json(cursosLotados.count);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = MatriculaController;
