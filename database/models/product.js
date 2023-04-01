module.exports= (sequelize, DataTypes)=>{

 const alias = 'Product';
 const cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    genre_id : DataTypes.INTEGER,
    brand_id : DataTypes.INTEGER,
    category_id :DataTypes.INTEGER,
    sizes_id :DataTypes.INTEGER,
    colors_id : DataTypes.INTEGER,
    material_id : DataTypes.INTEGER,
};

const config ={
    timestamps: true,
    tableName: "products",
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
};

const Product = sequelize.define(alias, cols, config);
    /* 'Product',{
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        description: DataTypes.TEXT,
        stock: DataTypes.INTEGER,        
    },
    {
        tableName: 'products',
        timestamps:false
    }); */

    Product.associate = models =>{
        //un producto tiene muchos géneros .Ej: el producto remera puede tener genero masculino, femenino,etc
        Product.belongsToMany(models.Genre, {
    
            as: "genre",
            through: "genre_products",
            foreignKey: "product_id",
            foreignKeyConstraint: true,
            otherKey: "genre_id",
            timestamps: false,
            onDelete: "cascade",
          });


          /* CREATE TABLE genre_products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            product_id INT,
            genre_id INT,
            FOREIGN KEY (product_id) REFERENCES products(id),
            FOREIGN KEY (genre_id) REFERENCES genre(id)
          );
          CREATE TABLE genre (
            id INT AUTO_INCREMENT PRIMARY KEY,
            genre VARCHAR(255) NOT NULL
          ); */


    

    //Un producto puede pertenecer a varias marcas. Ej: el producto remera puede tener muchas marcas.    
    Product.belongsToMany(models.Brand, {
    
        as: "brand",
        through: "brand_products",
        foreignKey: "product_id",
        foreignKeyConstraint: true,
        otherKey: "brand_id",
        timestamps: false,
        onDelete: "cascade",
      });
    /* CREATE TABLE brand_products (
    products_id INT,
    brand_id INT,
    FOREIGN KEY (products_id) REFERENCES products(id),
    FOREIGN KEY (brand_id) REFERENCES brand(id)
  );
  CREATE TABLE brand (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  ); */
      
// un producto ej 1 remera puede ser de varios materiales!!!!!!!!!!!!
    Product.belongsToMany(models.Material, {
    
    as: "material",
    through: "material_products",
    foreignKey: "product_id",
    foreignKeyConstraint: true,
    otherKey: "material_id",
    timestamps: false,
    onDelete: "cascade",
  });   
        
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

       // belongsToMany!!!!!!!!!!!!!!!! 
    //Un producto puede pertenecer a varias categorias. Ej: el producto remera puede estar en Oferta y a la vez Destacado   
    Product.belongsToMany(models.Category, {
    
      as: "category",
      through: "category_products",
      foreignKey: "product_id",
      foreignKeyConstraint: true,
      otherKey: "category_id",
      timestamps: false,
      onDelete: "cascade",
    });
    
    /* CREATE TABLE category_products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  category_id INT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (category_id) REFERENCES category(id)
);

    
    sizes_id :DataTypes.INTEGER,
    colors_id : DataTypes.INTEGER,  */

    //Un producto puede pertenecer a varios talles. Ej: el producto remera viene en muchos talles.
    Product.belongsToMany(models.Sizes, {
    
        as: "sizes",
        through: "products_sizes",
        foreignKey: "product_id",
        foreignKeyConstraint: true,
        otherKey: "size_id",
        timestamps: false,
        onDelete: "cascade",
      });

     /*  CREATE TABLE products_sizes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        product_id INT,
        size_id INT,
        FOREIGN KEY (product_id) REFERENCES products(id),
        FOREIGN KEY (size_id) REFERENCES sizes(id)
      );
      CREATE TABLE sizes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        size VARCHAR(255) NOT NULL */



        Product.belongsToMany(models.Colors, {
    //Un producto puede pertenecer a varios colores. Ej: el producto remera pueded venir en muchos colores.

        /* CREATE TABLE colors_products (
                id INT AUTO_INCREMENT PRIMARY KEY,
                product_id INT,
                color_id INT,
                FOREIGN KEY (product_id) REFERENCES products(id),
                FOREIGN KEY (color_id) REFERENCES colors(id)
              );
        CREATE TABLE colors (
                id INT AUTO_INCREMENT PRIMARY KEY,
                color VARCHAR(255) NOT NULL
              ); */

            as: "colors",
            through: "colors_products",
            foreignKey: "product_id",
            foreignKeyConstraint: true,
            otherKey: "color_id",
            timestamps: false,
            onDelete: "cascade",
          });

          //un producto puede tener muchas imágenes 

          Product.hasMany(models.Images, {
            as: 'images_products',
            foreignKey: 'product_id'
          });

    }
        return Product;
};