// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList:string[] = ["Azam","Sikandar","Shehryar","Zubair","Hakim"];
let invitationMessage = " you are codially invited to dinner at my place, i will be looking forward to see you.";
guestList.forEach(guest=>{
    console.log(guest+invitationMessage);
});
let cantMakeGuest = "Zubair";
let alternativeGuest = "Ehsan";
console.log("\nUnfortunatley "+cantMakeGuest +" will not be joining us for tonights dinner!\n");

for(let i = 0;i < guestList.length;i++){
    if(guestList[i] == cantMakeGuest){
        guestList[i] = alternativeGuest;
        break;
    }
}

guestList.forEach(guest=>{
    console.log(guest+invitationMessage);
});

//task 16 begins from here
console.log("\nAttention everyone i've just came to know that ive found a much larger dinner table! so more guests will be joining us.\n");

//adding a guest at start
guestList.unshift("Abdul Rehman");

//finding middle of array
let middleOfArray = guestList.length/2;
middleOfArray = Math.round(middleOfArray);

//adding a guest at middle
guestList.splice(middleOfArray,0,"Sarmad");

//adding a guest at end
guestList.push("Sameer");

//again inviting
guestList.forEach(guest=>{
    console.log(guest+invitationMessage);
});

export {};