# Glamazon

## Description
This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package.
In order to run this application, you should have the MySQL database already set up on your machine.

### Node Store Front Interface
* The interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. 
* The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. 
* If the selected quantity is currently in stock, the user's order is fulfilled, and the item quantity is updated in the database. 
** If the desired quantity is not available, the user is prompted to modify their order.

### Screenshots
The customer will begin by viewing the stores inventory and prompted to selected an item using the ID number. The customer also has the open to exit the store by typing "q".
<img src="assets/images/glam1.png" width="325"> <br>
The customer is then prompted to select a quantity for the product.
<img src="assets/images/glam2.png" width="325"> <br>
If the product and quantity are available, the customer is alerted the purchased was successful and the table (database) will reflect the remaining quantity amount of the purchased product.