const product = [];

module.exports = {
    // Pagina de Inicio
    home: (req, res) => {
        res.render("index", {
          product,
        });
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
}