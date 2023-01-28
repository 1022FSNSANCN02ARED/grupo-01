const products = require("../data/product");

const controller = {

  // Controladores para el DASHBOARD

  // escritorio
  dashboard: (req, res) => {
    res.render("dashboard/dashboard", {
      
    });
  },

  // Añadir Nuevo Producto en el Escritorio
  newproduct: (req, res) => {
    res.render("dashboard/newProduct", {

    });
  },

  // Lista de Productos en el Escritorio
   productosadmin: (req, res) => {
    res.render("dashboard/product", { products: products.findAll() });
  },

  // Update - Form to edit
  editarproducto: (req, res) => {
    const product = products.findById(req.params.id);
    res.render("dashboard/editProduct", { product });
  },


  // Controladores para el FrontEnd

  // Detalle de un producto en la pagina Frontal
  detailproduct: (req, res) => {
    const product = products.findById(req.params.id);
    res.render("dashboard/productDetail", { product });
  },

    
  

};

module.exports = controller;