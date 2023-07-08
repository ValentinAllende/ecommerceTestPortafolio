require("dotenv").config();
const axios = require("axios");
const url = process.env.API_URL_PRODUCTS;
const { Product } = require("../../db");

/*nos traemos los productos de la api a la db*/
const syncProductsApi = async (req, res) => {
  const response = await axios.get(url);
  await response.data.map((prd) => {
    Product.findOrCreate({
      where: {
        product_id: prd.id,
      } /*en where busca si existe el id no lo crea, si no existe se crea el modelo*/,
      defaults: {
        product_id: prd.id,
        name: prd.title,
        image: prd.image,
        model: `${prd.id}`,
        description: prd.description,
        category: prd.category,
        price: prd.price,
        stock: 1,
        is_active: true,
      },
    }); //para debuguear
    /*.then(([product, created]) => {
        if (created) {
          console.log("Usuario creado:", product);
        } else {
          console.log("El usuario ya existe:", product);
        }
      })
      .catch((error) => {
        console.error("Error al crear o buscar el usuario:", error);
      });*/
  });
  res.send("finalizo la sync de la api");
};
/*Get Products*/
const getProductsDb = async (req, res) => {
  const allproductsDb = await Product.findAll();
  res.send(allproductsDb);
};
/*Get Products by id*/
const getProductsById = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const ProductsById = await Product.findOne({
      where: { product_id: id },
      attributes: [
        "product_id",
        "name",
        "image",
        "model",
        "description",
        "category",
        "price",
        "stock",
        "is_active",
      ],
    });

    ProductsById
      ? res.status(200).json(ProductsById)
      : res.status(404).send("no se encontro el producto");
  }
};
module.exports = { syncProductsApi, getProductsDb, getProductsById };
