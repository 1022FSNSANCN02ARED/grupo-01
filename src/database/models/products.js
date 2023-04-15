const { DataTypes } = require("sequelize");

module.exports= (sequelize, DataTypes)=>{

    const Product = sequelize.define(
        'Product',{
            name: DataTypes.STRING,
            price: DataTypes.DECIMAL,
            discount: DataTypes.DECIMAL,
            description: DataTypes.TEXT,
            stock: DataTypes.INTEGER,        
        },
        {
            tableName: 'products',
            timestamps:false
        });
    
        Product.associate = models =>{
    
            Product.belongsTo(models.Genre, {
                as:'genre',
                foreignKey: 'genre_id'
            }); 
    
            Product.belongsTo(models.Brand,{
                as:'brand',
                foreignKey: 'brand_id'
            });
    
            Product.belongsTo(models.Category,{
                as:'category',
                foreignKey: 'category_id'
            });
            Product.hasMany(models.Images,{
                as:'images',
                foreignKey: 'product_id'
            });
    
            Product.belongsToMany(models.Sizes,{
                as:'sizes',
                through: models.ProductSizes,
                foreignKey: "product_id",
                otherKey: "size_id",

            });
   
            Product.belongsToMany(models.Colors,{
                as:'colors',
                through: models.ProductColors,
                foreignKey: "product_id",
                otherKey: "color_id",

            });
     
            Product.belongsTo(models.Material,{
                as:'material',
                foreignKey: 'material_id'
            }); 
    
        }
            return Product;
    };