const products = require("../data/product");
const Sequelize= require ('sequelize');
const { Product, Brand, Colors, Genre, Sizes, Category, Images, ProductSizes, ProductColors, Material } = require("../database/models");
const category = require("../database/models/category");


const controller = {

  // Controladores para el DASHBOARD

  // escritorio
  dashboard: (req, res) => {
    return res.render("dashboard/dashboard", {
      
    });
  },

  // Mostrar formulario para añadir Nuevo Producto en el Escritorio
  newproduct: async (req, res) => {
    let marca=await Brand.findAll();
    let colors=await Colors.findAll();
    let genre=await Genre.findAll();
    let sizes=await Sizes.findAll();
    let category=await Category.findAll();
    let material=await Material.findAll();
    
    

    return  res.render("dashboard/newProduct", {
    product: products,
    brand: marca,
    colors: colors,
    genre: genre,
    sizes: sizes,
    category: category,
    material: material
    })
  },
  
  // Añadir Nuevo Producto en el Escritorio
  
  addProduct: async(req, res) => {
      const product ={ 
        ...req.body,
        brand_id:req.body.brand,
        genre_id:req.body.genre,
        category_id:req.body.category,
        material_id:req.body.material,
      }
      let sizes=req.body.sizes
      let colors=req.body.colors
   
      let image={}
      //Guarda en la tabla productos
      let productCreated=await Product.create(product);
      
      //Guarda en la tabla imágenes
      for (let i = 0; i < 5; i++) {
         image={name_archive:req.files[i] ? req.files[i].filename : "default-image.png",
                   product_id:productCreated.id
                   }
      await Images.create(image)
    };
    //Guarda en la tabla intermedia ProductSizes
    for (let i = 0; i < sizes.length; i++) {
     await ProductSizes.create({
      product_id:productCreated.id,
      size_id:sizes[i]
    }) 
     };  
 
     //Guarda en la tabla intermedia ProductColors
    for (let i = 0; i < colors.length; i++) {
      await ProductColors.create({
       product_id:productCreated.id,
       color_id:colors[i]
     }) 
      };  
    
    res.redirect("/dashboard/product"); 
    },

    
  
  // Lista de Productos en el Escritorio
   productosadmin: async(req, res) => {
    let products=await Product.findAll({
      include:[{association:"images"}]
   })
   return res.render("dashboard/product", { products:products  });
  },

  //Mostrar - Formulario para editar Producto
  editarproducto:async (req, res) => {
    let marca=await Brand.findAll();
    let colors=await Colors.findAll();
    let genre=await Genre.findAll();
    let sizes=await Sizes.findAll();
    let material=await Material.findAll();
    let productSizes=await ProductSizes.findAll({
      where:{
        product_id:req.params.id
      }
    });
    let productColors=await ProductColors.findAll({
      where:{
        product_id:req.params.id
      }
    });
    
    let category=await Category.findAll();
    const product =await Product.findByPk(req.params.id,
      {
        include:[{association:"images"},{association:"genre"},{association:"brand"},{association:"category"},{association:"sizes"},{association:"material"}]
     });
   return res.render("dashboard/editProduct", { product:product,
    brand:marca,
    colors:colors,
    genre:genre,
    sizes:sizes,
    category:category,
    material:material,
    productSizes:productSizes,
    productColors:productColors
    });
  },

  // Actualizar - Método para actualizar
  actualizar: async(req, res) => {
    const product ={ 
      name:req.body.name,
      description:req.body.description,
      price:req.body.price,
      discount:req.body.discount,
      brand_id:req.body.brand,
      genre_id:req.body.genre,
      category_id:req.body.category,
      material_id:req.body.material
    }
    let sizes=req.body.sizes
    let colors=req.body.colors
    let image={}
    let images_id={}
  
    let productToUpdate=await Product.update(product,{where:{
      id:req.params.id,
    }});

  
    if(req.files.length!==0){
    
    for (let i = 0; i < 5; i++) {
       image={name_archive:req.files[i] ? req.files[i].filename : "default-image.png",
              product_id:req.params.id           
      }
                        
      images_id=await Images.findOne({where:{product_id:req.params.id }})
    await Images.update(image,{where:{
      product_id:req.params.id,
       id:images_id.id+i
    }})
    }
  }
   //Guarda en la tabla intermedia ProductSizes
if (sizes) {
  

     await ProductSizes.destroy({where:{
  product_id:req.params.id

     }})
    for (let i = 0; i < sizes.length; i++) {
     await ProductSizes.create({
    product_id:req.params.id,
    size_id:sizes[i]
     }) }
    }
//Guarda en la tabla intermedia ProductColors
if (colors) {
  

await ProductColors.destroy({where:{
  product_id:req.params.id

     }})
    for (let i = 0; i < colors.length; i++) {
     await ProductColors.create({
    product_id:req.params.id,
    color_id:colors[i]
     }) }}

     res.redirect("/dashboard/product"); 
  },
    
   
  // Eliminar: elimina un producto de la base de datos
  eliminar: async (req, res) => {
    //Eliminar imágenes del producto a borrar
    
      for (let i = 0; i < 5; i++) {
      await Images.destroy({where:{
        product_id:req.params.id
      }})
      }
    

    //Eliminar datos de talles
    await ProductSizes.destroy({where:{
      product_id:req.params.id
         }})
     //Eliminar datos de colores
    await ProductColors.destroy({where:{
      product_id:req.params.id
         }})

    //Eliminar datos de la tabla productos
    await Product.destroy({where:{
            id:req.params.id
          }})     
    res.redirect("/dashboard/product"); 

  },


  
}
module.exports = controller;