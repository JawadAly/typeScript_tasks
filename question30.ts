let user_names:string[] = ["versel","drake","snorlax","admin","lindstorm"];
user_names.forEach(singleUser=>{
    if(singleUser == "admin"){
        console.log("Hello admin! would you like to see a status report?");
    }
    else{
        console.log(`Hello ${singleUser},thanks for logging in again!`);
    }
});