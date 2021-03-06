import { Model, DataTypes } from 'sequelize';

class Colaborador extends Model{
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nascimento: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
      {
        sequelize,
        tableName: 'colaboradores'
      });
    return this;
  }
}

module.exports = Colaborador;