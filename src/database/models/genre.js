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
      
        tableName: "genre",
        timestamps: false,
       
        //deletedAt: false,
    };

    const Genre = sequelize.define(alias, cols, config);
    
      Genre.associate = function (models){
        //un género tiene muchos productos. Ej: El género Femenino tiene muchos productos 
        /* Genre.belongsToMany(models.Product,{
            as: "products",
            through: "genre_products",
            foreignKey: "genre_id",
            otherKey: "product_id",
            timestamps: false,
            onDelete: "cascade",
        }); */
  
          Genre.hasMany(models.Product,{
  
              as:'products',
              foreignKey: "genre_id",
          });
      };



  return Genre;

  }
