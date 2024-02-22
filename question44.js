function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var sandwich = items.join(", ");
    console.log("You ordered a sandwich with the following items:", sandwich);
}
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss Cheese");
orderSandwich("Veggie Patty", "Avocado", "Sprouts");
