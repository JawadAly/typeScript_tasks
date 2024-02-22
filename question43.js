"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magician_names = ["Abra", "Kadabra", "Lusion", "Nosis", "Zecter"];
function show_magicians(magNames) {
    magNames.forEach(function (singleName) {
        console.log(singleName);
    });
}
function make_great(magNames) {
    for (var i = 0; i < magNames.length; i++) {
        magNames[i] = "The Great ".concat(magNames[i]);
    }
    return magNames;
}
var replicatedArray = magician_names.slice();
make_great(replicatedArray);
console.log("Copied array with modification is :");
show_magicians(replicatedArray);
console.log("Original Array is:");
show_magicians(magician_names);
