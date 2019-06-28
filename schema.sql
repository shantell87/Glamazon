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

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Glam Lashes", "Beauty", 20.00, 100),
("Glam Gloss", "Beauty", 25.00, 100),
("Glam Nails", "Beauty", 15.00, 100),
("Glam Curling Wand", "Beauty", 65.00, 100),
("Glam Maxi Dress", "Clothing", 20.00, 100),
("Glam Perfect Demin", "Clothing", 49.00, 100),
("Glam Party Dress", "Clothing", 35.00, 100),
("Glam Sneakers", "Clothing", 60.00, 100),
("Glam Hoodie", "Clothing", 32.00, 100),
("Glam Cap", "Clothing", 10.00, 100)
;


SELECT * FROM products;