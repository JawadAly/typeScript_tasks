"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var favLocations = ["Istanbul", "Phuket", "Frankfurt", "Kumrat", "Mexico"];
console.log("Location's in normal order:\n");
favLocations.forEach(function (location) {
    console.log(location);
});
//in alphabetical order
var alphabeticalArray = favLocations.slice().sort();
console.log("\nLocation's in alphabetical order:\n");
alphabeticalArray.forEach(function (location) {
    console.log(location);
});
//original array
console.log("\nLocation's in original order:\n");
favLocations.forEach(function (location) {
    console.log(location);
});
//in reverse alphabetical order
var reverseAlphabeticalArray = favLocations.slice().sort().reverse();
console.log("\nLocation's in reverse alphabetical order:\n");
reverseAlphabeticalArray.forEach(function (location) {
    console.log(location);
});
//original array
console.log("\nLocation's in original order:\n");
favLocations.forEach(function (location) {
    console.log(location);
});
//reversed original array
favLocations.reverse();
console.log("\nReversed Original Array\n");
favLocations.forEach(function (location) {
    console.log(location);
});
//back to original form
favLocations.reverse();
console.log("\nOriginal Array\n");
favLocations.forEach(function (location) {
    console.log(location);
});
//alphabetically sorted array
favLocations.sort();
console.log("\nAlphabetically Sorted Array\n");
favLocations.forEach(function (location) {
    console.log(location);
});
//reversed alphabetically sorted array
favLocations.sort().reverse();
console.log("\nReversed Alphabetically Sorted Array\n");
favLocations.forEach(function (location) {
    console.log(location);
});
