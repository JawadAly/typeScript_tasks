let current_users:string[] = ["jawad","ASLAM","hassan","MOHSIN","yahya"];
let new_users:string[] = ["saleem","aslam","ali","mohsin","ehsan"];
new_users.forEach(singleNewUser=>{
    let boolFlag = false;
    current_users.forEach(singleCurrentUser=>{
        if(singleNewUser.toLowerCase() == singleCurrentUser.toLowerCase()){
            boolFlag = true;
        }
    });
    if(boolFlag){
        console.log(`The username ${singleNewUser} has already been used please select a new one!`); 
    }
    else{
        console.log(`The username ${singleNewUser} is available!`);
    }
});

