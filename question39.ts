function city_country(cityName:string,countryName:string):string{
    return ` "${cityName}, ${countryName}" `;
}
let incomingString = city_country("Quetta","Pakistan");
console.log(incomingString);
let incomingString1 = city_country("Manilla","Phillipines");
console.log(incomingString1);
let incomingString2 = city_country("Ontario","Canada");
console.log(incomingString2);