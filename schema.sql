DROP DATABASE IF EXISTS glamazon_db;
CREATE DATABASE glamazon_db;

USE glamazon_db;

CREATE TABLE products (
item_id INT(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT(100) NOT NULL,
PRIMARY KEY (item_id)

);

SELECT * FROM products;