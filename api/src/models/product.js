const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Product", {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
    }, //id

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: DataTypes.STRING,
    }, //title

    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: DataTypes.STRING,
    },

    model: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: DataTypes.STRING,
    }, //este es de nuestra pagina

    description: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: DataTypes.STRING,
    },

    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: DataTypes.FLOAT,
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: DataTypes.INTEGER,
    }, //este es de nuestra pagina

    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: DataTypes.BOOLEAN,
    }, //este es de nuestra pagina
  });
};
