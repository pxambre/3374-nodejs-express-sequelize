const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
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
}

module.exports = PessoaServices;
