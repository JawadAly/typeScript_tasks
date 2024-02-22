function make_shirt(tshirtSize:string = "Large",tshirtText:string = "I Love TypeScript"):void{
    console.log(`The specified t-shirts size is ${tshirtSize} and it has a text printed on it as follows: "${tshirtText}" `);
}
make_shirt();
make_shirt("Medium");
make_shirt("XL","Be You!");

export {};