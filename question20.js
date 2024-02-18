"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var continualReply, incomingCar, carsCounter = 0;
var favCars = [];
do {
    carsCounter++;
    incomingCar = readlineSync.question("Enter your ".concat(carsCounter, " favourite car :"));
    incomingCar ? favCars.push(incomingCar) : console.log("Please enter a car name in order to proceed further!");
    continualReply = readlineSync.question("Do you want to enter another favourite car? (y/n)");
} while (continualReply == "y" || continualReply == "Y");
console.log("\nFAvourite Cars List is as follows:\n");
favCars.forEach(function (car) {
    console.log(car);
});
