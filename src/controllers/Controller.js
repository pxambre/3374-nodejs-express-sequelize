class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async listarTodos(req, res) {
    try {
      const listaDeRegisto = await this.entidadeService.listarTodosOsRegistos();
      return res.status(200).json(listaDeRegisto);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async listarUmPorId(req, res) {
    const { id } = req.params;
    try {
      const umRegisto = await this.entidadeService.registoPorId(Number(id));
      return res.status(200).json(umRegisto);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async criar(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegisto = await this.entidadeService.criarRegisto(dadosParaCriacao);
      return res.status(201).json(novoRegisto);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async atualizar(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizarRegisto(dadosAtualizados,Number(id));

      if (!foiAtualizado) {
        return res.status(400).json({ mensagem:'Não foi possível atualizar este registo.'});
      } 
      return res.status(200).json({ mensagem:'Registo atualizado!'});
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async remover(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.removerRegisto(Number(id));
      res.status(200).json({ mensagem: `id ${id} removido.`});
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = Controller;
