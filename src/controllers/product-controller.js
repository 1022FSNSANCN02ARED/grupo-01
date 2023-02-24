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
        image: req.files[0] ? req.files[0].filename : "default-image.png",
        image1: req.files[1] ? req.files[1].filename : "default-image.png",
        image2: req.files[2] ? req.files[2].filename : "default-image.png",
        image3: req.files[3] ? req.files[3].filename : "default-image.png",
        image4: req.files[4] ? req.files[4].filename : "default-image.png",
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
    
    
    const productoriginal = products.findById(req.params.id);

    const product = {
      
        id: Number(req.params.id),            
        name: req.body.name,   
        genero: req.body.genero,
        marca: req.body.marca,
        material: req.body.material,       
        price: Number(req.body.price),
        discount: Number(req.body.discount),
        category: req.body.category,
        description: req.body.description,
        image: req.files[0] ? req.files[0].filename : productoriginal.image,
        image1: req.files[1] ? req.files[1].filename : productoriginal.image1,
        image2: req.files[2] ? req.files[2].filename : productoriginal.image2,
        image3: req.files[3] ? req.files[3].filename : productoriginal.image3,
        image4: req.files[4] ? req.files[4].filename : productoriginal.image4,


    };
    products.saveProductEdited(product);
    res.redirect("/dashboard/product");
  },
  // Eliminar: elimina un producto de la base de datos
  eliminar: (req, res) => {
    products.deleteProduct(req.params.id);
    res.redirect("/dashboard/product");
  },


};

module.exports = controller;