const products = require("../data/product");


module.exports = {
    // Pagina de Inicio
    store: (req, res) => {
      const usuario=req.session.usuarioLogeado;

      res.render("store", { products: products.findAll(), usuario:usuario });
    },

    home: (req, res) => {
      const productsList= products.findAll();
      const productSale=productsList.filter((p) => p.category =="Oferta");  
      const productFeatured=productsList.filter((p) => p.category =="Destacado");
      const usuario=req.session.usuarioLogeado;
      res.render("index", { productSale, productFeatured, usuario:usuario });
    },

    // Pagina del Carrito
    carrito: (req, res) => {
      const usuario=req.session.usuarioLogeado;
    
        res.render("productCart", {
          usuario:usuario
        });
      },
    
    // Pagina del Login
    login: (req, res) => {
      let registro=0;
        res.render("login", {
          //paginalogin,
          registro:registro,
        });
    },
    // Detalle de un producto en la pagina Frontal
    detailproduct: (req, res) => {
      const product = products.findById(req.params.id);
      const usuario=req.session.usuarioLogeado;

      res.render("productDetail", { product,usuario:usuario });
    },
    
}