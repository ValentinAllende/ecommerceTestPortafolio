require("dotenv").config();
const axios = require("axios");
const url = process.env.API_URL_CATEGORIES;
const { Category } = require("../../db");

const syncCategoriesApi = async (req, res) => {
  const response = await axios.get(url);
  let count = 1;
  await response.data.map((cty) => {
    Category.findOrCreate({
      where: {
        category_id: count,
      } /*en where busca si existe el id no lo crea, si no existe se crea el modelo*/,
      defaults: {
        category_id: count,
        name: cty,
      },
    });
    count++;
  });
  res.send("finalizo la sync de categorias");
};
/*Get categories*/
const getCategoriesDb = async (req, res) => {
  const allcategoriesDb = await Category.findAll();
  res.send(allcategoriesDb);
};
/*Get Category by id*/
const getCategoriesById = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const categoriesById = await Category.findOne({
      where: { category_id: id },
      attributes: ["category_id", "name"],
    });

    categoriesById
      ? res.status(200).json(categoriesById)
      : res.status(404).send("no se encontro el categoryo");
  }
};
module.exports = { syncCategoriesApi, getCategoriesDb, getCategoriesById };
