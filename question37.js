"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(tshirtSize, tshirtText) {
    if (tshirtSize === void 0) { tshirtSize = "Large"; }
    if (tshirtText === void 0) { tshirtText = "I Love TypeScript"; }
    console.log("The specified t-shirts size is ".concat(tshirtSize, " and it has a text printed on it as follows: \"").concat(tshirtText, "\" "));
}
make_shirt();
make_shirt("Medium");
make_shirt("XL", "Be You!");
