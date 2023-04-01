module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
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
    });

    
  /*   CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        identification_document VARCHAR(20) NOT NULL,
        email VARCHAR(100) NOT NULL,
        user VARCHAR(50) NOT NULL,
        birthdate DATE,
        image VARCHAR(100),
        password VARCHAR(100) NOT NULL,
        role_id INT NOT NULL,
        FOREIGN KEY (role_id) REFERENCES role(id)
      ); */

    Users.associate = function(models) {

        //cada usuario pertenece a un solo rol
      Users.belongsTo(models.Role, {
        as: 'role',
        foreignKey: 'role_id'
      });
    };
  
    return Users;
  };