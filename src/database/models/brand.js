const { DataTypes } = require("sequelize");

module.exports= (sequelize, DataTypes) =>{

    const Brand = sequelize.define( 
        'Brand',  
    {
        name: DataTypes.STRING(),
    });

    Brand.associate = models =>{
        Brand.hasMany(models.Product,{

            as:'products',
            foreignKey: "brand_id",
        });
    }
    return Brand;

}