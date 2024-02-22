function orderSandwich(...items: string[]): void {
    const sandwich = items.join(", ");
    console.log("You ordered a sandwich with the following items:", sandwich);
}

orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss Cheese");
orderSandwich("Veggie Patty", "Avocado", "Sprouts");
