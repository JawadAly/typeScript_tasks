var favPizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
for (var i = 0; i < favPizzas.length; i++) {
    if (favPizzas[i] == "Pepperoni") {
        console.log("I really like ".concat(favPizzas[i], " Pizza"));
    }
    else if (favPizzas[i] == "Margherita") {
        console.log("".concat(favPizzas[i], " Pizza is one of my favourite!"));
    }
    else {
        console.log("".concat(favPizzas[i], " Pizza is one of the delicious spicy cuisine!"));
    }
}
console.log("Pizzas are at the top of my favourite fast food list.I absolutely adore a classic Margherita pizza with its simplicity and perfect balance of flavors.There's something irresistible about a spicy pepperoni pizza, the way the pepperoni crisps up and releases its flavor into every bite.A BBQ chicken pizza with tangy barbecue sauce, tender chicken, and caramelized onions is always a delightful indulgence.I really love pizza! It's the ultimate comfort food for me, no matter what toppings are on it.");
