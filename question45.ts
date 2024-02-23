interface Car{
    manufacturer:string;
    modelName:number;
    [key:string]:any;
}
function createCar(manufacturerName:string,model:number,...extraKeyValPairs:[string,any][]):Car{
    const vehicle:Car = {
        manufacturer:manufacturerName,
        modelName:model
    };
    extraKeyValPairs.forEach(([key,val])=>{
        vehicle[key] = val;
    });
    return vehicle;
}
const incomingCar = createCar("Mercedez",2021,["color","blue"],["groundClearance","shallow"]);
console.log(incomingCar);