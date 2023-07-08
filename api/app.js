/* app de la api*/
const express = require("express");
const morgan = require("morgan");
const indexRouter = require("./src/routes/index");
const app = express();
/*seteamos morgan y mandamos el indexRouter que es el archivo principal del enrutado*/
app.use(morgan("dev"));
app.use(indexRouter);

module.exports = app;
