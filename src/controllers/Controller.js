class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async listaTodos(req, res) {
    try {
      const listaDeRegisto = await this.entidadeService.listarTodosOsRegistos();
      return res.status(200).send(listaDeRegisto);
    } catch (error) {
      //tratar erros
    }
  }
}

module.exports = Controller;
