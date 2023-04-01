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
            timestamps: true,
            tableName: "sizes",
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: false,
        };
    
        
/* CREATE TABLE sizes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        size VARCHAR(255) NOT NULL */ 
    
      const Sizes = sequelize.define(alias, cols, config);
    
      Sizes.associate = function (models){

         //un talle puede tener varios productos. Ej: el talle L pertenece a varios productos
        Sizes.belongsToMany(models.Product,{
            as: "products",
            through: "products_sizes",
            foreignKey: "size_id",
            otherKey: "product_id",
            timestamps: false,
            onDelete: "cascade",
        });
      };

     /*  CREATE TABLE products_sizes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        product_id INT,
        size_id INT,
        FOREIGN KEY (product_id) REFERENCES products(id),
        FOREIGN KEY (size_id) REFERENCES sizes(id)
      ); */
    
      return Sizes;
    };
