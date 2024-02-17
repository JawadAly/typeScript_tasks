//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names:string[] = ["Ali","Taimoor","Rizwan","Sarim","Grover","Kamran","Malik"];
let message = " you are invited to my birthday party!";
names.forEach(element=>{
    console.log(element+message);
});

export {};