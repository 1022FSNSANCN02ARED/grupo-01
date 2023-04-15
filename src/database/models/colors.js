module.exports= (sequelize, DataTypes) =>{



    /* CREATE TABLE colors_products (
                id INT AUTO_INCREMENT PRIMARY KEY,
                product_id INT,
                color_id INT,
                FOREIGN KEY (product_id) REFERENCES products(id),
                FOREIGN KEY (color_id) REFERENCES colors(id)
              );
              
               CREATE TABLE colors (
                id INT AUTO_INCREMENT PRIMARY KEY,
                color VARCHAR(255) NOT NULL
              ); */

    const alias = 'Colors';
    const cols= {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        color: {
            type: DataTypes.STRING ,
            allowNull: false,
        },
    };
    const config ={
        timestamps: false,
        tableName: "colors",
        
        
    };

    const Colors = sequelize.define(alias, cols, config);
    
    Colors.associate = function (models){
         //un color puede tener varios productos. Ej: el color negro puede pertenecer a varios productos
      Colors.belongsToMany(models.Product,{
          as: "products",
          through: models.ProductColors,
          foreignKey: "color_id",
          otherKey: "product_id",
          timestamps: false,
          onDelete: "cascade",
      });
    };
    
    return Colors;
};


       