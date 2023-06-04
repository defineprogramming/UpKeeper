const { Model, DataTypes } = require(‘sequelize’);
const sequelize = require(‘…/config/database’);
const bcrypt = require(‘bcrypt’);

class User extends Model {
  validPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
      },
    },
    sequelize,
    modelName: ‘User’,
    timestamps: true,
  }
);

module.exports = User;
