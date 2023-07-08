const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Category", {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.STRING,
    },
  });
};
