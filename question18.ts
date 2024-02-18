let favLocations:string[] = ["Istanbul","Phuket","Frankfurt","Kumrat","Mexico"];
console.log("Location's in normal order:\n");
favLocations.forEach(location=>{
    console.log(location);
});

//in alphabetical order
let alphabeticalArray = favLocations.slice().sort();
console.log("\nLocation's in alphabetical order:\n");
alphabeticalArray.forEach(location=>{
    console.log(location);
});

//original array
console.log("\nLocation's in original order:\n");
favLocations.forEach(location=>{
    console.log(location);
});

//in reverse alphabetical order
let reverseAlphabeticalArray = favLocations.slice().sort().reverse();
console.log("\nLocation's in reverse alphabetical order:\n");
reverseAlphabeticalArray.forEach(location=>{
    console.log(location);
});

//original array
console.log("\nLocation's in original order:\n");
favLocations.forEach(location=>{
    console.log(location);
});

//reversed original array
favLocations.reverse();
console.log("\nReversed Original Array\n");
favLocations.forEach(location=>{
    console.log(location);
});

//back to original form
favLocations.reverse();
console.log("\nOriginal Array\n");
favLocations.forEach(location=>{
    console.log(location);
});

//alphabetically sorted array
favLocations.sort();
console.log("\nAlphabetically Sorted Array\n");
favLocations.forEach(location=>{
    console.log(location);
});

//reversed alphabetically sorted array
favLocations.sort().reverse();
console.log("\nReversed Alphabetically Sorted Array\n");
favLocations.forEach(location=>{
    console.log(location);
});



export {};