/* IMPORTACIONES */
const { Router } = require("express");
const ProductController = require("../controller/ProductController");
const CategoriesController = require("../controller/CategoriesController");
const indexRouter = Router();
/* Aca van a ir todas las rutas*/
/* Products route */
indexRouter.use("/products", ProductController);

/* Categories route */
indexRouter.use("/categories", CategoriesController);

/* Admins route */

//indexRouter.use("/admin", AdminsController);

module.exports = indexRouter;
