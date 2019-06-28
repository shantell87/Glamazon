var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host:"localhost",
    //port/username/password/database
    
    port:3306,
    user:"root",
    password: "password",
    database: "glamazon_db"
});
connection.connect(function(err){
    if (err) throw err;
    console.log("connected as if " + connection.threadId);
    connection.end();
});

function afterConnection() {
    connection.query("SELECT * FROM products;", function(err,res) {
        if(err) throw err;
        console.log(res);
        connection.end();
    });
} afterConnection();

//prompt user to choose an item
//prompt user to choose quantity
//check database for quanitity check
//fufill order and display total price
//update database with new quantity total
