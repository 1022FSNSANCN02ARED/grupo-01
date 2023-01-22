const products = require("../data/product");


module.exports = {
  dashboard: (req, res) => {
    res.render("dashboard/dashboard", {
      //escritorio,
    });
  },
  editarproducto: (req, res) => {
    res.render("dashboard/editProduct", {

    });
  },

  productosadmin: (req, res) => {
    res.render("dashboard/product", {

    });

  },
  productosadmindetail: (req, res) => {
    res.render("dashboard/productDetail", {

    });
  },
  newproduct: (req, res) => {
    res.render("dashboard/newProduct", {

    });
  },
}