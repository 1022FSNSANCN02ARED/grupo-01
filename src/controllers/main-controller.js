const products = require("../data/product");

module.exports = {
    // Pagina de Inicio
    home: (req, res) => {
      res.render("index", { products: products.findAll() });
    },

    // Pagina del Carrito
    carrito: (req, res) => {
        res.render("productCart", {
          product,
        });
      },
    
    // Pagina del Login
    login: (req, res) => {
        res.render("login", {
          //paginalogin,
        });
    },
    // Detalle de un producto en la pagina Frontal
    detailproduct: (req, res) => {
      const product = products.findById(req.params.id);
      res.render("productDetail", { product });
    },
    
}