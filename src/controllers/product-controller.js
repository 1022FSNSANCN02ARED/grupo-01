const products = require("../data/product");
const Sequelize_ = require ('sequelize');
const { Product, Brand, Colors, Genre, Sizes,Category } = require("../database/models");
const category = require("../database/models/category");


const controller = {

  // Controladores para el DASHBOARD

  // escritorio
  dashboard: (req, res) => {
    return res.render("dashboard/dashboard", {
      
    });
  },

  // Añadir Nuevo Producto en el Escritorio
  newproduct: async (req, res) => {
    let marca=await Brand.findAll();
    let colors=await Colors.findAll();
    let genre=await Genre.findAll();
    let sizes=await Sizes.findAll();
    let category=await Category.findAll();
    
    return  res.render("dashboard/newProduct", {
    brand:marca,
    colors:colors,
    genre:genre,
    sizes:sizes,
    category:category,
    })
  },
  
  // Añadir Nuevo Producto en el Escritorio
  
  addProduct: (req, res) => {
console.log(req.body.category)
      const product ={ 
        ...req.body,
        brand_id:req.body.brand,
        genre_id:req.body.genre,
        category_id:req.body.category
      }
      Product.create(product).then((product) => {
        res.redirect("/dashboard/product");
      });
    },

    /* const product = {
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
   return res.redirect("/dashboard/product"); */
  
  // Lista de Productos en el Escritorio
   productosadmin: (req, res) => {
   return res.render("dashboard/product", { products: products.findAll() });
  },

  // Actualizar - Formulario para editar Producto
  editarproducto: (req, res) => {
    const product = products.findById(req.params.id);
   return res.render("dashboard/editProduct", { product });
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
  return  res.redirect("/dashboard/product");
  },
  // Eliminar: elimina un producto de la base de datos
  eliminar: (req, res) => {
    products.deleteProduct(req.params.id);
  return res.redirect("/dashboard/product");
  },


  
}
module.exports = controller;