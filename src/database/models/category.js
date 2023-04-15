module.exports= (sequelize, DataTypes) =>{

    const alias = 'Category';
    const cols= {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };
    const config ={
        timestamps: false,
        tableName: "category",
       /*  createdAt: "created_at",
        updatedAt: "updated_at", */
        //deletedAt: false,
    };

/* CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) NOT NULL
  ); */

  const Category = sequelize.define(alias, cols, config);

  Category.associate = function (models){

     //una categoría puede tener varios productos. Ej: La categoría Oferta tiene varios productos
     /* Category.hasMany(models.Product,{
        as: "products",
    
        foreignKey: "category_id",
        
    });
  };

  return Category; */
    /* Category.belongsToMany(models.Product,{
        as: "products",
        through: "category_products",
        foreignKey: "category_id",
        otherKey: "product_id",
        timestamps: false,
        onDelete: "cascade",
    }); */
    Category.hasMany(models.Product,{
  
      as:'productscat',
      foreignKey: "category_id",
  });
  };

  return Category;
};


  /* CREATE TABLE category_products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    category_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (category_id) REFERENCES category(id)
  ); */