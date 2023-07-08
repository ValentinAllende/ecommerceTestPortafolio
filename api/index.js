const app = require("./app");
const { sequelize } = require("./db");
app.set("port", 3000);

app.listen(app.get("port"), () => {
  // este force true busca las tablas, si estan als dropea y las vuelve a generar, se puede cambiar a alter
  //alter :true SOLO actualiza las tablas y no las esta dropeando todo el tiempo
  sequelize.sync({ force: true });
  console.log(`Servidor escuchando en puerto ${app.get("port")}`);
});
