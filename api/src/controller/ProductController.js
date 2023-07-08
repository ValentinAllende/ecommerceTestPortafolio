const { Router } = require("express");

const ProductController = Router();
/*Nos traemos los handlers que contiene las logica para las llamadas */

const {
  syncProductsApi,
  getProductsDb,
  getProductsById,
} = require("../handlers/productsHandler");

ProductController.get("/", getProductsDb);

ProductController.get("/get", syncProductsApi);

ProductController.get("/get/:id", getProductsById);

module.exports = ProductController;
