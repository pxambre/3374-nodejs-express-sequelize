const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }
  
  async listarMatriculasPorEstudante(id) {
    const estudante = await super.registoPorId(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async listarPessoasEscopoTodos() {
    const listaPessoas = await super.listaRegistosPorEscopo('todosOsRegistos');
    return listaPessoas;
  }
}

module.exports = PessoaServices;
