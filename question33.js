var number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
number_array.forEach(function (singleNumber) {
    if (singleNumber == 1) {
        console.log("".concat(singleNumber, "st"));
    }
    else if (singleNumber == 2) {
        console.log("".concat(singleNumber, "nd"));
    }
    else if (singleNumber == 3) {
        console.log("".concat(singleNumber, "rd"));
    }
    else {
        console.log("".concat(singleNumber, "th"));
    }
});
