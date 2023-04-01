module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });

    /* CREATE TABLE role (
        id INT AUTO_INCREMENT PRIMARY KEY,
        role VARCHAR(50) NOT NULL
      ); */

      Role.associate = function(models) {
        //un rol puede tener muchos usuarios
        Role.hasMany(models.Users, {
          as: 'users',
          foreignKey: 'role_id'
        });
      };
    
    return Role;
  };