



module.exports = (sequelize, DataTypes) => {
     
    const alias = 'Users';
 const cols ={
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      identification_document: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: true,
        
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    };
    const config ={
        timestamps: true,
        tableName: "users",
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false
    };

    const Users = sequelize.define(alias, cols, config);
    
 

    Users.associate = function(models) {

        //cada usuario pertenece a un solo rol
      Users.belongsTo(models.Roles, {
        as: 'role',
        foreignKey: 'role_id'
      });
    };
  
    return Users;
  };