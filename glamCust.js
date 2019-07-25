require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    //port/username/password/database

    port: 3306,
    user: "root",
    password: process.env.db_pass,
    database: "glamazon_db"
});
connection.connect(function (err) {
    if (err) throw err;
    itemsList();
});
var itemsList = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.table(res[i].item_id + " || " + res[i].product_name + " || " + "$" + res[i].price + " || " + res[i].stock_quantity + "\n");
        }
        shopItem(res);
    });
}

// Prompt the customer for a product ID
function shopItem(inventory) {
    // Prompts user for what they would like to purchase
    inquirer
        .prompt([
            {
                type: "input",
                name: "choice",
                message: "What is the ID of the item you would you like to purchase? [Quit with Q]",
                validate: function (val) {
                    return !isNaN(val) || val.toLowerCase() === "q";
                }
            }
        ])
        .then(function (val) {
            // Check if the user wants to quit the program
            checkIfShouldExit(val.choice);
            var choiceId = parseInt(val.choice);
            var product = checkInventory(choiceId, inventory);

            // If there is a product with the id the user chose, prompt the customer for a desired quantity
            if (product) {
                // Pass the chosen product to promptCustomerForQuantity
                shopQuantity(product);
            }
            else {
                // Otherwise let them know the item is not in the inventory, re-run loadProducts
                console.log("\nThat item is not in the inventory.");
                itemsList();
            }
        });
}

// Prompt the customer for a product quantity
function shopQuantity(product) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "quantity",
                message: "How many would you like? [Quit with Q]",
                validate: function (val) {
                    return val > 0 || val.toLowerCase() === "q";
                }
            }
        ])
        .then(function (val) {
            // Check if the user wants to quit the program
            checkIfShouldExit(val.quantity);
            var quantity = parseInt(val.quantity);

            // If there isn't enough of the chosen product and quantity, let the user know and re-run loadProducts
            if (quantity > product.stock_quantity) {
                console.log("\nInsufficient quantity!");
                itemsList();
            }
            else {
                // Otherwise run makePurchase, give it the product information and desired quantity to purchase
                makePurchase(product, quantity);
            }
        });
}

// Purchase the desired quantity of the desired item
function makePurchase(product, quantity) {
    connection.query(
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [quantity, product.item_id],
        function (err, res) {
            // Let the user know the purchase was successful, re-run loadProducts
            console.log("\nSuccessfully purchased " + quantity + " " + product.product_name + "'s!");
            itemsList();
        }
    );
}

// Check to see if the product the user chose exists in the inventory
function checkInventory(choiceId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id === choiceId) {
            // If a matching product is found, return the product
            return inventory[i];
        }
    }
    // Otherwise return null
    return null;
}

// Check to see if the user wants to quit the program
function checkIfShouldExit(choice) {
    if (choice.toLowerCase() === "q") {
        // Log a message and exit the current node process
        console.log("Goodbye!");
        process.exit(0);
    }
}



