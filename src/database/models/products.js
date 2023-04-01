const { DataTypes } = require("sequelize");

module.exports= (sequelize, DataTypes)=>{

    const Product = sequelize.define(
        'Product',{
            name: DataTypes.STRING,
            price: DataTypes.DECIMAL,
            description: DataTypes.TEXT,
            stock: DataTypes.INTEGER,        
        },
        {
            tableName: 'products',
            timestamps:false
        });
    
        Product.associate = models =>{
    
            /* Product.belongs(models.Genre, {
                as:'genre',
                foreignKey: 'genre_id'
            }); */
    
            Product.belongsTo(models.Brand,{
                as:'brand',
                foreignKey: 'brand_id'
            });
    /* 
            Product.belongsTo(models.Category,{
                as:'category',
                foreignKey: 'category_id'
            });
    
            Product.belongsTo(models.Size,{
                as:'size',
                foreignKey: 'size_id'
            });
    
            Product.belongsTo(models.Colors,{
                as:'colors',
                foreignKey: 'colors_id'
            });
    
            Product.belongsTo(models.Material,{
                as:'material',
                foreignKey: 'material_id'
            }); */
    
        }
            return Product;
    };