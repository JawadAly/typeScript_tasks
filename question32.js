var current_users = ["jawad", "ASLAM", "hassan", "MOHSIN", "yahya"];
var new_users = ["saleem", "aslam", "ali", "mohsin", "ehsan"];
new_users.forEach(function (singleNewUser) {
    var boolFlag = false;
    current_users.forEach(function (singleCurrentUser) {
        if (singleNewUser.toLowerCase() == singleCurrentUser.toLowerCase()) {
            boolFlag = true;
        }
    });
    if (boolFlag) {
        console.log("The username ".concat(singleNewUser, " has already been used please select a new one!"));
    }
    else {
        console.log("The username ".concat(singleNewUser, " is available!"));
    }
});
