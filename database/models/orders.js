module.exports = (sequelize, DataTypes) => {
  const alias = 'Order';
  const cols = { 
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id'
          }
        },
        order_id: {
          type: DataTypes.STRING,
          allowNull: false
        },
        date: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false
        }
      };

        const config ={
          timestamps: true,
          tableName: "orders",
          createdAt: "created_at",
          updatedAt: "updated_at",
          deletedAt: false,
      };

      const Order = sequelize.define(alias, cols, config);
     
      Order.associate  = models =>{
      
        Order.belongsTo(models.Users, {
          as: 'users',
          foreignKey: 'user_id'
        });
        
    Order.belongsToMany(models.Product, {
      through: 'order_product',
      foreignKey: 'order_id'
    });

       /*  CREATE TABLE orders (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            order_id VARCHAR(50) NOT NULL,
            date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            status VARCHAR(20) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id)
          );
          
          CREATE TABLE order_products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            product_id INT,
            order_id INT,
            FOREIGN KEY (product_id) REFERENCES products(id),
            FOREIGN KEY (order_id) REFERENCES orders(id)
          ); */
      };
          return Order;

};