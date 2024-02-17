"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
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
