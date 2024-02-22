var animals = ["Lion", "Tiger", "Leopard"];
for (var i = 0; i < animals.length; i++) {
    if (animals[i] == "Lion") {
        console.log("".concat(animals[i], " is referred to as \"King of Jungle\"."));
    }
    else if (animals[i] == "Tiger") {
        console.log("".concat(animals[i], " is one of the largest and most formidable big cats in the world."));
    }
    else {
        console.log("".concat(animals[i], " possess a very rapid speed"));
    }
}
console.log("The common characteristic amoung these 3 is they all belong to the same family of big cats, known as Felidae.");
