const dataSource = require('../database/models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async listarTodosOsRegistos() {
    return dataSource[this.model].findAll();
  }

  async listaRegistosPorEscopo(escopo){
    return dataSource[this.model].scope(escopo).findAll();
  }

  async registoPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criarRegisto(dadosDoRegisto) {
    return dataSource[this.model].create(dadosDoRegisto);
  }

  async atualizarRegisto(dadosAtualizados, id) {
    const listaDeRegistosAtualizados = dataSource[this.model].update(dadosAtualizados, {
      where: { id: id}
    });
    
    return listaDeRegistosAtualizados[0] === 0 ? false : true;
  }

  async removerRegisto(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
