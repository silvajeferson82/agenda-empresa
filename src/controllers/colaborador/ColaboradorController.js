import Colaborador from '../../models/Colaborador';

class ColaboradorController{
  async show(req, res) {
    const colaborador = await Colaborador.findAll();

    if (colaborador.lenght === 0) {
      return res.status(404).json({ message: 'Sem resultados.' });
    }

    return res.json(colaborador);
  }

  async index(req, res) {
    const { id } = req.params;

    const colaborador = await Colaborador.findAll({where: {id}});

    if (!colaborador) {
      return res.status(404).json({ message: 'Sem resultados.' });
    }

    return res.json(colaborador);
  }
  async store(req, res) {
    const {
      nome,
      sobrenome,
      cpf,
      nascimento,
      email
    } = req.body;
    const colaborador = await Colaborador.create({
      nome,
      sobrenome,
      cpf,
      nascimento,
      email
    });

    return res.json(colaborador);
  }
}

export default new ColaboradorController();