const Sequelize= require ('sequelize');
const { Product, Brand, Colors, Genre, Sizes, Category, Images, ProductSizes, ProductColors, Material } = require("../database/models");
const { validationResult }=require("express-validator");


    async function resultvalidations(req,res,next){ 
        
        const resultvalidations=validationResult(req);
        const oldValues=req.body;
        const oldValuesFiles=req.files;

        let product=await Product.findAll();
        let marca=await Brand.findAll();
        let colors=await Colors.findAll();
        let genre=await Genre.findAll();
        let sizes=await Sizes.findAll();
        let category=await Category.findAll();
        let material=await Material.findAll();  

    
        if (resultvalidations.errors.length>0) {
            return  res.render("dashboard/EditProduct",{
            errors:resultvalidations.mapped(),
            oldValues:oldValues,
            product:oldValues,
            oldValuesFiles,
            product : product,
            category: category,
            brand: marca,
            colors: colors,
            genre: genre,
            material: material,
            sizes: sizes,
            oldValuesFiles
             });    
        }else{
            next();
        };
}
module.exports=resultvalidations;