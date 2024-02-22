var user_names = ["versel", "drake", "snorlax", "admin", "lindstorm"];
user_names.forEach(function (singleUser) {
    if (singleUser == "admin") {
        console.log("Hello admin! would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(singleUser, ",thanks for logging in again!"));
    }
});
