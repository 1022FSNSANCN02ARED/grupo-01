module.exports= (sequelize, DataTypes) =>{

    const alias = 'Brand';
    const cols= {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };
    const config ={
        timestamps: true,
        tableName: "brand",
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false,
    };
    

    //una marca puede tener varios productos. 

    const Brand = sequelize.define( alias, cols, config);

    Brand.associate = function (models){
        Brand.belongsToMany(models.Product,{
            as: "products",
            through: "brand_products",
            foreignKey: "brand_id",
            otherKey: "product_id",
            timestamps: false,
            onDelete: "cascade",
        });
      };
    
      return Brand;
    };
/* CREATE TABLE brand_products (
    products_id INT,
    brand_id INT,
    FOREIGN KEY (products_id) REFERENCES products(id),
    FOREIGN KEY (brand_id) REFERENCES brand(id)
  );
  CREATE TABLE brand (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  ); */