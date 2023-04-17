DROP SCHEMA IF EXISTS `snsports_db`;


CREATE SCHEMA `snsports_db`;


USE `snsports_db`;

CREATE TABLE genre_products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  genre_id INT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (genre_id) REFERENCES genre(id)
);
CREATE TABLE genre (
  id INT AUTO_INCREMENT PRIMARY KEY,
  genre VARCHAR(255) NOT NULL
);
CREATE TABLE brand_products (
  products_id INT,
  brand_id INT,
  FOREIGN KEY (products_id) REFERENCES products(id),
  FOREIGN KEY (brand_id) REFERENCES brand(id)
);
CREATE TABLE brand (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
CREATE TABLE category_products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  category_id INT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (category_id) REFERENCES category(id)
);
CREATE TABLE category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(255) NOT NULL
);
CREATE TABLE products_sizes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  size_id INT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (size_id) REFERENCES sizes(id)
);
CREATE TABLE sizes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  size VARCHAR(255) NOT NULL
);
CREATE TABLE colors_products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  color_id INT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (color_id) REFERENCES colors(id)
);
CREATE TABLE colors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  color VARCHAR(255) NOT NULL
);
CREATE TABLE material_products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  material_id INT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (material_id) REFERENCES material(id)
);
CREATE TABLE material (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(255) NOT NULL
);
CREATE TABLE images_products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  name_archive VARCHAR(255) NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE orders (
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
);
CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  role VARCHAR(50) NOT NULL
);

CREATE TABLE users (
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
);
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL,
  genre_id INT,
  brand_id INT,
  category_id INT,
  sizes_id INT,
  colors_id INT,
  material_id INT,
  FOREIGN KEY (genre_id) REFERENCES genre(id),
  FOREIGN KEY (brand_id) REFERENCES brand(id),
  FOREIGN KEY (category_id) REFERENCES category(id),
  FOREIGN KEY (sizes_id) REFERENCES sizes(id),
  FOREIGN KEY (colors_id) REFERENCES colors(id),
  FOREIGN KEY (material_id) REFERENCES material(id)
);

INSERT INTO genre (id, genre) VALUES 
(1,'Hombre'), 
(2,'Mujer'), 
(3,'Niños'), 
(4,'Unisex');

INSERT INTO category (id, type) VALUES 
(1, 'Oferta'), 
(2, 'Destacado');

INSERT INTO material (id, type) VALUES 
(1, 'Poliéster'), 
(2, 'Malla'),
(3, 'Nylon'),
(4, 'Sintético'),
(5, 'Fibra');

INSERT INTO brand (id, name) VALUES 
(1, 'Adidas'), 
(2, 'Nike'),
(3, 'Puma'),
(4, 'Everlast'),
(5, 'Umbro'),
(6, 'Reebok'),
(7, 'Reef');

INSERT INTO sizes (id, size) VALUES 
(1, 'S'), 
(2, 'M'),
(3, 'L'),
(4, 'XL'),
(5, 'XXL'),
(6, 'XXXL');

INSERT INTO colors (id, color) VALUES 
(1, 'Blanco'), 
(2, 'Negro'),
(3, 'Azul'),
(4, 'Rojo'),
(5, 'Verde'),
(6, 'Gris'),
(7, 'Naranja'),
(8, 'Amarillo');

INSERT INTO products (id, name, price, stock,description) VALUES 
(1, 'Remera', 0, 0, ""), 
(2, 'Musculosa', 0, 0, ""),
(3, 'Pantalón', 0, 0, ""),
(4, 'Campera', 0, 0, ""),
(5, 'Short', 0, 0, ""),
(6, 'Mochila', 0, 0,"");

INSERT INTO role (id, role) VALUES
(1, 'Cliente'),
(2, 'Administrador');

INSERT INTO users (id, first_name, last_name, identification_document , email, user, birthdate, image, password, role_id) VALUES
(1, 'Juan', 'Pérez', '11241755', 'juanperez@example.com', 'juanperez', '1990-01-01', 'imagen1.jpg', 'contraseña1', 1);