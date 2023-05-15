const products = require("../data/product");
const Sequelize= require ('sequelize');

const { Product, Brand, Colors, Genre, Sizes,Category, Images, ProductSizes, ProductColors } = require("../database/models");


const Op = Sequelize.Op;
module.exports = {
  //Tienda, se muestran todos los productos  
    store: async (req, res) => {
      const usuario=req.session.usuarioLogeado;
      let products=await Product.findAll({
      include:[{association:"images"}]
      })
      res.render("store", { products: products, usuario:usuario });
      },

  //Tienda, se muestran todos los productos de Hombres 

      storeHombre: async (req, res) => {
        const usuario=req.session.usuarioLogeado;
        let products=await Product.findAll({where:{
          genre_id:2
        },
          include:[{association:"images"}]
          })
        
        res.render("store", { products: products, usuario:usuario });
        },

         //Tienda, se muestran todos los productos de Mujeres

      storeMujer: async (req, res) => {
        const usuario=req.session.usuarioLogeado;
        let products=await Product.findAll({where:{
          genre_id:1
        },
          include:[{association:"images"}]
          })
        
        res.render("store", { products: products, usuario:usuario });
        },

        storeKids: async (req, res) => {
          const usuario=req.session.usuarioLogeado;
          let products=await Product.findAll({where:{
            genre_id:{[Op.or]: [3,4]}
          },
            include:[{association:"images"}]
            })
          
          res.render("store", { products: products, usuario:usuario });
          },
// Pagina de Inicio
    home: async (req, res) => {
      const productsList= await Product.findAll({
        include:[{association:"images"}]
        });
       
      const productSale=productsList.filter((p) => p.category_id ==2);  
      const productFeatured=productsList.filter((p) => p.category_id ==1);
      const usuario=req.session.usuarioLogeado;
      res.render("index", { productSale, productFeatured, usuario:usuario });
    },

    async search(req, res) {
      const search = req.query.buscar;
      const usuario=req.session.usuarioLogeado;

      //search products by name
      const products = await Product.findAll({
        include:[{association:"images"}],
      
          where: {
              name: {
                  [Op.like]: `%${search}%`,
              },
          },
      });

      res.render("store", {products: products, usuario:usuario});
  },

    // Pagina del Carrito
    carrito: (req, res) => {
      const usuario=req.session.usuarioLogeado;
    
      return  res.render("productCart", {
          usuario:usuario
        });
      },
    
    // Pagina del Login
    login: (req, res) => {
      let registro=0;
      return  res.render("login", {
          registro:registro,
        });
    },
    
    // Detalle de un producto en la pagina Frontal
    detailproduct: async (req, res) => {
      const product = await Product.findByPk(req.params.id,{
        include:[{association:"images"},{association:"genre"},{association:"brand"},{association:"category"},{association:"sizes"},{association:"material"},{association:"colors"}]
     });
      const usuario=req.session.usuarioLogeado;

    return  res.render("productDetail", { product,usuario:usuario });
    },
    
}