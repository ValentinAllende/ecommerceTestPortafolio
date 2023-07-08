const { Router } = require("express");

const CategoriesController = Router();
/*Nos traemos los handlers que contiene las logica para las llamadas */

const {
  syncCategoriesApi,
  getCategoriesDb,
  getCategoriesById,
} = require("../handlers/categoriesHandler");

CategoriesController.get("/", syncCategoriesApi);
CategoriesController.get("/get", getCategoriesDb);
CategoriesController.get("/get/:id", getCategoriesById);

module.exports = CategoriesController;
