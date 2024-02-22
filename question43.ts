let magician_names:string[] = ["Abra","Kadabra","Lusion","Nosis","Zecter"];
function show_magicians(magNames:string[]):void{
    magNames.forEach(singleName=>{
        console.log(singleName);
    });
}

function make_great(magNames:string[]):string[]{
    for(let i = 0;i < magNames.length;i++){
        magNames[i] = `The Great ${magNames[i]}`;
    }
    return magNames;
}

let replicatedArray:string[] = magician_names.slice();
make_great(replicatedArray);
console.log("Copied array with modification is :");
show_magicians(replicatedArray);
console.log("Original Array is:");
show_magicians(magician_names);

export {};