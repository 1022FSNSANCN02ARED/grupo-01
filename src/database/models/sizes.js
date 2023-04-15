module.exports= (sequelize, DataTypes) =>{

        const alias = 'Sizes';
        const cols= {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            size: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        };
        const config ={
            timestamps: false,
            tableName: "sizes",
            /* createdAt: "created_at",
            updatedAt: "updated_at", */
            //deletedAt: false,
        };
    
        
/* CREATE TABLE sizes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        size VARCHAR(255) NOT NULL */ 
    
      const Sizes = sequelize.define(alias, cols, config);
    
      Sizes.associate = function (models){

         //un talle puede tener varios productos. Ej: el talle L pertenece a varios productos
        Sizes.belongsToMany(models.Product,{
            as: "products",
            through: models.ProductSizes,
            foreignKey: "size_id",
            otherKey: "product_id",
           
        });
      };

     
      return Sizes;
    };
