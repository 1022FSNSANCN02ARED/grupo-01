module.exports= (sequelize, DataTypes) =>{

    const alias = 'Material';
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
        timestamps: true,
        tableName: "material",
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false,
    };

    const Material = sequelize.define(alias, cols, config);
    
      Material.associate = function (models){
        //un material puede estar presente en varios productos Ej: El Poliester  puede estar en muchos productos 
        Material.belongsToMany(models.Product,{
            as: "products",
            through: "material_products",
            foreignKey: "material_id",
            otherKey: "product_id",
            timestamps: false,
            onDelete: "cascade",
        });
      };

 /*CREATE TABLE material_products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  material_id INT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (material_id) REFERENCES material(id)
);
CREATE TABLE material (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(255) NOT NULL
 */


  return Material;

  }