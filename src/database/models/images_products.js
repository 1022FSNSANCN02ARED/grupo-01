module.exports= (sequelize, DataTypes) =>{

    const alias = 'Images';
    const cols= {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name_archive: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    };
    const config ={
        timestamps: false,
        tableName: "images_products",
        /* createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false, */
    };


   /*  CREATE TABLE images_products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        product_id INT,
        name_archive VARCHAR(255) NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products(id)
      ); */

    const Images = sequelize.define(alias, cols, config);
    
      Images.associate = function (models){
        //una imagen pertenece solo a un producto. Ej: la iamgen de la remera de algún equipo, solo pertenece a el
        Images.belongsTo(models.Product,{
            as: "products",
            foreignKey: "product_id"
      });
    }

      return Images ; 
    };