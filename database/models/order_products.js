module.exports = (sequelize, DataTypes) => {
    const alias = 'OrderProduct';
    const cols= {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Order',
        key: 'id'
      },
    },
};
const config = {
    timestamps: true,
    tableName: 'order_products',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false,
  };

    const OrderProduct = sequelize.define(alias, cols, config);
    

    OrderProduct.associate = function(models) {
    
    
        OrderProduct.belongsTo(models.Order, {
        as: 'order',
        foreignKey: 'order_id'
      });

       
      OrderProduct.belongsTo(models.Product, {
        as: 'product',
        foreignKey: 'product_id'
      
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
          }        
          return OrderProduct;
};