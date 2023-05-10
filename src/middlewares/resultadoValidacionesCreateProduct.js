const { validationResult } = require("express-validator");
const Sequelize = require('sequelize');
const { Product, Brand, Colors, Genre, Sizes, Category, Images, ProductSizes, ProductColors, Material } = require("../database/models");


async function resultvalidations(req, res, next) {
    let marca = await Brand.findAll();
    let colors = await Colors.findAll();
    let genre = await Genre.findAll();
    let sizes = await Sizes.findAll();
    let category = await Category.findAll();
    let material = await Material.findAll();

   
    const resultvalidations = validationResult(req);
    const oldValues = req.body;
    const oldValuesFiles = req.files;
    if (resultvalidations.errors.length > 0) {
        return res.render("dashboard/newProduct", {
            errors: resultvalidations.mapped(),
            oldValues: oldValues,
            product: oldValues,
            oldValuesFiles,
            brand: marca,
            colors: colors,
            genre: genre,
            sizes: sizes,
            category: category,
            material: material,
            
        });
    } else {
        next();
    };
}
module.exports = resultvalidations;