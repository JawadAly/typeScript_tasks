"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_names = [];
if (user_names.length == 0) {
    console.log("We need to find some users!");
}
else {
    user_names.forEach(function (singleUser) {
        if (singleUser == "admin") {
            console.log("Hello admin! would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(singleUser, ",thanks for logging in again!"));
        }
    });
}
