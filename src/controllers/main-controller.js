const products = require("../data/product");

module.exports = {
    // Pagina de Inicio
    store: (req, res) => {
      
     
      res.render("store", { products: products.findAll() });
      
    },
    home: (req, res) => {
      const productsList= products.findAll();
      const productSale=productsList.filter((p) => p.category =="Oferta");
      
      const productFeatured=productsList.filter((p) => p.category =="Destacado");
      res.render("index", { productSale, productFeatured });
    },

    // Pagina del Carrito
    carrito: (req, res) => {
        res.render("productCart", {
          
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