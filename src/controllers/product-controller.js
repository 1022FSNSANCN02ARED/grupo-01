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
  
  // Añadir Nuevo Producto en el Escritorio
  addProduct: (req, res) => {
    // [x] resolver los valores numéricos del producto
    // [x] resolver un id para el producto nuevo
    // [x] resolver la imagen del producto nuevo
    // [x] persistir los datos de este nuevo producto

    const product = {
        id: Date.now(),
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        genero: req.body.genero,
        marca: req.body.marca,
        material: req.body.material,
        price: Number(req.body.price),
        discount: Number(req.body.discount),
        image: req.file ? req.file.filename : "default-image.png",
    };

    // res.send(product);
    products.saveProduct(product);

    res.redirect("/dashboard/product");
  },
  

  // Lista de Productos en el Escritorio
   productosadmin: (req, res) => {
    res.render("dashboard/product", { products: products.findAll() });
  },

  // Actualizar - Formulario para editar Producto
  editarproducto: (req, res) => {
    const product = products.findById(req.params.id);
    res.render("dashboard/editProduct", { product });
  },

  // Actualizar - Método para actualizar
  actualizar: (req, res) => {
    const product = req.body;
    res.send(product);
  },
  
  // Eliminar: elimina un producto de la base de datos
  eliminar: (req, res) => {
    res.send(`deleting ${req.params.id}`);
},


};

module.exports = controller;