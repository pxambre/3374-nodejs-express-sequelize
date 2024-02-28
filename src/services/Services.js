const dataSource = require('../database/models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async listarTodosOsRegistos(where = {}) {
    return dataSource[this.model].findAll({ where: { ...where } });
  }

  async listaRegistosPorEscopo(escopo) {
    return dataSource[this.model].scope(escopo).findAll();
  }

  async listaRegistoPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async listaRegisto(where) {
    return dataSource[this.model].findOne({ where: { ...where } });
  }

  async numeroTotalDeRegistos(options) {
    return dataSource[this.model].findAndCountAll({ ...options });
  }

  async criarRegisto(dadosDoRegisto) {
    return dataSource[this.model].create(dadosDoRegisto);
  }

  async atualizarRegisto(dadosAtualizados, where) {
    const listaDeRegistosAtualizados = dataSource[this.model].update(
      dadosAtualizados,
      {
        where: { ...where },
      }
    );
    return listaDeRegistosAtualizados[0] === 0 ? false : true;
  }

  async removerRegisto(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
