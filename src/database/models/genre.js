module.exports= (sequelize, DataTypes) =>{

    const alias = 'Genre';
    const cols= {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };
    const config ={
        timestamps: true,
        tableName: "genre",
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false,
    };

    const Genre = sequelize.define(alias, cols, config);
    
      Genre.associate = function (models){
        //un género tiene muchos productos. Ej: El género Femenino tiene muchos productos 
        Genre.belongsToMany(models.Product,{
            as: "products",
            through: "genre_products",
            foreignKey: "genre_id",
            otherKey: "product_id",
            timestamps: false,
            onDelete: "cascade",
        });
      };

/* CREATE TABLE genre_products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    genre_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (genre_id) REFERENCES genre(id)
  );

  CREATE TABLE genre (
    id INT AUTO_INCREMENT PRIMARY KEY,
    genre VARCHAR(255) NOT NULL
  ); */

  return Genre;

  }