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
}
make_great(magician_names);
show_magicians(magician_names);
