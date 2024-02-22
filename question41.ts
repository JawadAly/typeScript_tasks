let magician_names:string[] = ["Abra","Kadabra","Lusion","Nosis","Zecter"];
function show_magicians(magNames:string[]):void{
    magNames.forEach(singleName=>{
        console.log(singleName);
    });
}

show_magicians(magician_names);