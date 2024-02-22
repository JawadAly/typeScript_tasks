function city_country(cityName, countryName) {
    return " \"".concat(cityName, ", ").concat(countryName, "\" ");
}
var incomingString = city_country("Quetta", "Pakistan");
console.log(incomingString);
var incomingString1 = city_country("Manilla", "Phillipines");
console.log(incomingString1);
var incomingString2 = city_country("Ontario", "Canada");
console.log(incomingString2);
