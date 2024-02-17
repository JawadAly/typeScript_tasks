let personName = "hadi akhtar malik";

//to upper case
console.log("Person's name in Uppercase is:"+personName.toUpperCase());
//to lower case
console.log("Person's name in Lowercase is:"+personName.toLowerCase());

//to title case
let titleCaseName = "";
let separateWords = personName.split(" ");
for(let i = 0;i < separateWords.length;i++){
    titleCaseName += separateWords[i].charAt(0).toUpperCase()+separateWords[i].slice(1).toLowerCase()+" ";
}
console.log("Person's name in Title case is:"+titleCaseName)




export {};