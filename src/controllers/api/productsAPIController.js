//const products = require("../data/product");
const Sequelize = require('sequelize');
const { Product, Brand, Colors, Genre, Sizes, Category, Images, ProductSizes, ProductColors, Material } = require("../../database/models");
const category = require("../../database/models/category");


const productsAPIController = {

  // Controladores para el DASHBOARD

  // escritorio

  // Mostrar formulario para añadir Nuevo Producto en el Escritorio
  newproduct: async (req, res) => {
    let marca = await Brand.findAll();
    let colors = await Colors.findAll();
    let genre = await Genre.findAll();
    let sizes = await Sizes.findAll();
    let category = await Category.findAll();
    let material = await Material.findAll();
    let respuesta = {
      meta: {
        status: 200,
        url: "api/newproduct",
      },
      data:{
      brand: marca,
      colors: colors,
      genre: genre,
      sizes: sizes,
      category: category,
      material: material
      }
    };
    res.json(respuesta);


  },

  // Añadir Nuevo Producto en el Escritorio

  addProduct: async (req, res) => {
    console.log(req.body)
    console.log(req.files)
    /* let productos=req.body
    let prod=JSON.parse(productos)
    console.log(prod); 
 */
    const product = {
      ...req.body,
      brand_id: req.body.brand,
      genre_id: req.body.genre,
      category_id: req.body.category,
      material_id: req.body.material,
    }
    let sizes = req.body.sizes
    let colors = req.body.colors

  let image = {}
    //Guarda en la tabla productos
    let productCreated = await Product.create(product);
      /* //Guarda en la tabla imágenes
       for (let i = 0; i < 5; i++) {
      image = { 
        name_archive: req.files[i] ? req.files[i].filename : "default-image.png",
        product_id: productCreated.id
       } 
      await Images.create(image)
      } */ 
    //Guarda en la tabla intermedia ProductSizes
    for (let i = 0; i < sizes.length; i++) {
      await ProductSizes.create({
        product_id: productCreated.id,
        size_id: sizes[i]
      })
    };

    //Guarda en la tabla intermedia ProductColors
    for (let i = 0; i < colors.length; i++) {
      await ProductColors.create({
        product_id: productCreated.id,
        color_id: colors[i]
      })
    };

    
      let respuesta = {
        meta: {
          status: 200,
        
          url: "api/products/saveproduct",
        },
        /* data: confirm, */
      };
      
      res.json(respuesta);
    /* })
    .catch((error) => {
      console.log(error);
      res.send(error);
    }); */
  },



  // Lista de Productos en el Escritorio
  list: async (req, res) => {
    let partialProducts = await Product.findAll({
      include: [{ association: "images" }, { association: "sizes" }], order:[["id","DESC"]]
    })
    let products = partialProducts.map((product) => {
      product.dataValues.urlDetail = "/api/products/" + product.dataValues.id

      return product
      
    })
    let respuesta = {
      meta: {
        status: 200,
        total: products.length,
        url: "api/products",
      },
      data: products,
    };
    res.json(respuesta);
  },


  // Detalle de un producto en la pagina Frontal
  detailproduct: async (req, res) => {
    const product = await Product.findByPk(req.params.id, {
      include: [{ association: "images" }, { association: "genre" }, { association: "brand" }, { association: "category" }, { association: "sizes" }, { association: "material" }]
    });
    let respuesta = {
      meta: {
        status: 200,
        url: "/api/product/:id",
      },
      data: product,
    };
    res.json(respuesta);
  },


  // Eliminar: elimina un producto de la base de datos
  eliminar: async (req, res) => {
    //Eliminar imágenes del producto a borrar

    for (let i = 0; i < 5; i++) {
      await Images.destroy({
        where: {
          product_id: req.params.id
        }
      })
    }


    //Eliminar datos de talles
    await ProductSizes.destroy({
      where: {
        product_id: req.params.id
      }
    })
    //Eliminar datos de talles
    await ProductColors.destroy({
      where: {
        product_id: req.params.id
      }
    })

    //Eliminar datos de la tabla productos
    await Product.destroy({
      where: {
        id: req.params.id
      }
    })
      .then((confirm) => {
        let respuesta = {
          meta: {
            status: 200,
            total: confirm.length,
            url: "api/product/delete/:id",
          },
          data: confirm,
        };
        
        res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
        res.send(error);
      });

  },


}
module.exports = productsAPIController;
