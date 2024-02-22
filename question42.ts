let magician_names:string[] = ["Abra","Kadabra","Lusion","Nosis","Zecter"];
function show_magicians(magNames:string[]):void{
    magNames.forEach(singleName=>{
        console.log(singleName);
    });
}

function make_great(magNames:string[]):void{
    for(let i = 0;i < magNames.length;i++){
        magNames[i] = `The Great ${magNames[i]}`;
    }
}
make_great(magician_names);
show_magicians(magician_names);

export {};