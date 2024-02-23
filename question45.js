function createCar(manufacturerName, model) {
    var extraKeyValPairs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraKeyValPairs[_i - 2] = arguments[_i];
    }
    var vehicle = {
        manufacturer: manufacturerName,
        modelName: model
    };
    extraKeyValPairs.forEach(function (_a) {
        var key = _a[0], val = _a[1];
        vehicle[key] = val;
    });
    return vehicle;
}
var incomingCar = createCar("Mercedez", 2021, ["color", "blue"], ["groundClearance", "shallow"]);
console.log(incomingCar);
