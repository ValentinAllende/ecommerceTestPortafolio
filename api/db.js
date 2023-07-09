const { Sequelize } = require("sequelize");
const productModel = require("./src/models/product");
const categoryModel = require("./src/models/category");

require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`,
  { logging: false }
  //postgres://alej:lxKqezUkfWL55LLIDviUU1zbiOrk7f3s@dpg-cilg84dph6eg6k9arua0-a.oregon-postgres.render.com/dbecommerce_q292
);
//{ logging: false } esto si esta en true muestra lo que devolveria la db, puede servir para test
/*MODELOS*/
productModel(sequelize);
categoryModel(sequelize);
/*RELACIONES*/
const { Product, Category } = sequelize.models;
//el producto puede tener varias categorias
Product.hasMany(Category);
Category.hasMany(Product);
//se exporta una copia de los modelos, de esta forma se puede usar para CRUD y demas
module.exports = { sequelize, ...sequelize.models };
