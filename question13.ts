//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favCars:string[] = ["Rolls Royce ","Mercedes ","G Wagon ","Lamborghini ","Bentley "];
let statements:string[] = ["is the best luxuriest car","is famous for its design"," is the best of wagons class vehicles","is best amoung sports cars","is the most expensive of all"];
for(let i = 0;i < favCars.length;i++){
    console.log(favCars[i]+statements[i]);
}
