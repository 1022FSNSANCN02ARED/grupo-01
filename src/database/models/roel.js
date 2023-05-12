module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define('Roles', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      role: {
        type: DataTypes.STRING,
        allowNull: true
      }},
      {
      timestamps: false,
      tableName: "role",
      /* createdAt: "created_at",
      updatedAt: "updated_at", */
      //deletedAt: false,
  }
    );
    
    /* CREATE TABLE role (
        id INT AUTO_INCREMENT PRIMARY KEY,
        role VARCHAR(50) NOT NULL
      ); */

      Roles.associate = function(models) {
        //un rol puede tener muchos usuarios
        Roles.hasMany(models.Users, {
          as: 'users',
          foreignKey: 'role_id'
        });
      };
    
    return Roles;
  };