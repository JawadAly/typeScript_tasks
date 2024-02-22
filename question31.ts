let user_names:string[] = [];
if(user_names.length == 0){
    console.log("We need to find some users!");
}
else{
    user_names.forEach(singleUser=>{
        if(singleUser == "admin"){
            console.log("Hello admin! would you like to see a status report?");
        }
        else{
            console.log(`Hello ${singleUser},thanks for logging in again!`);
        }
    });
}


export {};