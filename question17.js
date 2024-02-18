"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList = ["Azam", "Sikandar", "Shehryar", "Zubair", "Hakim"];
var invitationMessage = " you are codially invited to dinner at my place, i will be looking forward to see you.";
guestList.forEach(function (guest) {
    console.log(guest + invitationMessage);
});
var cantMakeGuest = "Zubair";
var alternativeGuest = "Ehsan";
console.log("\nUnfortunatley " + cantMakeGuest + " will not be joining us for tonights dinner!\n");
for (var i = 0; i < guestList.length; i++) {
    if (guestList[i] == cantMakeGuest) {
        guestList[i] = alternativeGuest;
        break;
    }
}
guestList.forEach(function (guest) {
    console.log(guest + invitationMessage);
});
//task 16 begins from here
console.log("\nAttention everyone i've just came to know that ive found a much larger dinner table! so more guests will be joining us.\n");
//adding a guest at start
guestList.unshift("Abdul Rehman");
//finding middle of array
var middleOfArray = guestList.length / 2;
middleOfArray = Math.round(middleOfArray);
//adding a guest at middle
guestList.splice(middleOfArray, 0, "Sarmad");
//adding a guest at end
guestList.push("Sameer");
//again inviting
guestList.forEach(function (guest) {
    console.log(guest + invitationMessage);
});
//task 17 begins from here
console.log("Oh my god !just realized large table doesnt arrived and i have limited space so i can only invite 2 people for dinner!");
// guestList.forEach(guest=>{
//     if(guestList.length > 1){
//         console.log("I am really sorry "+guest+"due to space scarcity i cannot invite you to dinner!");
//         guestList.shift();
//         console.log(guestList.length);
//     }
// });
var counter = 0;
while (guestList.length > 2) {
    guestList.shift();
    console.log("I am really sorry " + guestList[counter] + "due to space scarcity i cannot invite you to dinner!");
    counter++;
}
guestList.forEach(function (guest) {
    console.log(guest + " you are still invited !");
});
guestList.length = 0;
if (guestList.length == 0) {
    console.log("List is empty you dont have any guests in the list.");
}
else {
    for (var i = 0; i < guestList.length; i++) {
        console.log(guestList);
    }
}
