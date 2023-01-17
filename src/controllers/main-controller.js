const product = [];

module.exports = {
    home: (req, res) => {
        res.render("index", {
          product,
        });
      },
    
    productos: (req, res) => {
        res.render("productDetail", {
          product,
        });
      },

    carrito: (req, res) => {
        res.render("productCart", {
          product,
        });
      },
    
    login: (req, res) => {
        res.render("login", {
          //paginalogin,
        });
      },

    dashboard: (req, res) => {
        res.render("./dashboard/dashboard", {
          //escritorio,
        });
      },
    
    editarproducto: (req, res) => {
        res.render("./dashboard/editProduct", {
          product,
        });
      },

    productosadmin: (req, res) => {
        res.render("./dashboard/product", {
          product,
        });
      },
}