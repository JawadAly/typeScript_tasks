//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Azam", "Sikandar", "Shehryar", "Zubair", "Hakim"];
var invitationMessage = " you are codially invited to dinner at my place, i will be looking forward to see you.";
guestList.forEach(function (guest) {
    console.log(guest + invitationMessage);
});
