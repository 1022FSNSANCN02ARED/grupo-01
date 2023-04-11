const { DataTypes } = require("sequelize");

module.exports= (sequelize, DataTypes) =>{

    const Brand = sequelize.define( 
        'Brand',  
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: DataTypes.STRING(),

    },
    {
        tableName: 'brand',
        timestamps:false
    });

    Brand.associate = models =>{
        Brand.hasMany(models.Product,{

            as:'products',
            foreignKey: "brand_id",
        });
    }
    return Brand;

}