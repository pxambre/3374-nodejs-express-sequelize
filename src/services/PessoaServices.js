const dataSource = require('../database/models');
const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
    this.matriculasServices = new Services('Matricula');
  }

  async listarMatriculasAtivasPorEstudante(id) {
    const estudante = await super.listaRegistoPorId(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async listarTodasAsMatriculasPorEstudante(id) {
    const estudante = await super.listaRegistoPorId(id);
    const listaMatriculas = await estudante.getTodasAsMatriculadas();
    return listaMatriculas;
  }

  async listarPessoasEscopoTodos() {
    const listaPessoas = await super.listaRegistosPorEscopo('todosOsRegistos');
    return listaPessoas;
  }

  async cancelaPessoaEMatriculas(estudanteId) {
    return dataSource.sequelize.transaction(async (transacao) => {
      await super.atualizarRegisto(
        { ativo: false },
        { id: estudanteId },
        transacao
      );
      await this.matriculasServices.atualizarRegisto(
        { status: 'cancelado' },
        { estudante_id: estudanteId },
        transacao
      );
    });
  }
}

module.exports = PessoaServices;
