const Sequelize= require ('sequelize');
const { Product, Brand, Colors, Genre, Sizes, Category, Images, ProductSizes, ProductColors, Material } = require("../database/models");
const { validationResult }=require("express-validator");


async function  resultvalidations  (req,res,next)  { 
        
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
        let images=await Images.findAll();  

        console.log(oldValues);
    
        if (resultvalidations.errors.length>0) {
            return  res.render("dashboard/newProduct",{
            errors:resultvalidations.mapped(),
            oldValues:oldValues,
            product:oldValues,
            product : product,
            category: category,
            brand: marca,
            colors: colors,
            genre: genre,
            material: material,
            sizes: sizes,
            images: images,
            oldValuesFiles
             });   
        }else{
            next();
        };
}
module.exports=resultvalidations;