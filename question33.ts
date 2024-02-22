let number_array:number[] = [1,2,3,4,5,6,7,8,9];
number_array.forEach(singleNumber=>{
    if(singleNumber == 1){
        console.log(`${singleNumber}st`);
    }
    else if(singleNumber == 2){
        console.log(`${singleNumber}nd`);
    }
    else if(singleNumber == 3){
        console.log(`${singleNumber}rd`);
    }
    else{
        console.log(`${singleNumber}th`);
    }
    
});