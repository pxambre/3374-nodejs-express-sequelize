const { Op } = require('sequelize');
const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');

const cursoServices = new CursoServices();
class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }

  async pegaCursos(req, res) {
    const { data_inicial, data_final } = req.query;
    const where = {};
    //se existirem params, criar um prop {}
    data_inicial || data_final ? where.data_inicio = {} : null;
    //se existir data_inicial, adicionar a prop gte com o valor
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
    //se existir data_final, adicionar a prop lte com o valor
    data_final ? where.data_inicio[Op.lte] = data_final : null;

    try {
      const listaCursos = await cursoServices.listarTodosOsRegistos(where);
      return res.status(200).json(listaCursos);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = CursoController;
