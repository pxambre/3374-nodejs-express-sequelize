const database = require('../models');

class PessoaController {
  static async listarTodos (req, res) {
    try {
      const listaPessoas = await database.Pessoa.findAll();
      return res.status(200).send(listaPessoas);
    } catch (erro) {
      //tratar erros
    }
  }
}

module.exports = PessoaController;
