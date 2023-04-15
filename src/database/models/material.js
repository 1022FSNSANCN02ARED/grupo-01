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
        timestamps: false,
        tableName: "material",
        
        deletedAt: false,
    };

    const Material = sequelize.define(alias, cols, config);
    
      Material.associate = function (models){
        //un material puede estar presente en varios productos Ej: El Poliester  puede estar en muchos productos 
        Material.hasMany(models.Product,{
            as:'products',
            foreignKey: "material_id",
        });
      };




  return Material;

  }