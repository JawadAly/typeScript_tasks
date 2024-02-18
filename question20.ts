import * as readlineSync from 'readline-sync'
let continualReply,incomingCar,carsCounter = 0;
let favCars:string[] = [];
do{
    carsCounter++;
    incomingCar = readlineSync.question(`Enter your ${carsCounter} favourite car :`);
    incomingCar ? favCars.push(incomingCar) : console.log("Please enter a car name in order to proceed further!");
    continualReply = readlineSync.question("Do you want to enter another favourite car? (y/n)");    
}while(continualReply == "y" || continualReply == "Y");

console.log("\nFAvourite Cars List is as follows:\n");
favCars.forEach(car=>{
    console.log(car);
});



