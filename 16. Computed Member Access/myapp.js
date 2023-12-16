var car = {
    make: "volvo",
    speed: 160,
    engine:{
        size: 2.0,
        make: "Bmw",
        fuel: "petrol",
        pistons: [{maker: "Bmw"}, {maker: "Bmw2"}]
    },
    drive: function(){return "drive";}
}

var array = [
    "String",
    100,
    ["embed", 200],
    {car: "ford"},
    function(){return "drive";}
]

console.log (car.engine.pistons[0]);
console.log (car.engine.pistons[0].maker);
console.log("-----------------")
console.log(array[4]);
console.log(array[4]());

console.log(array[1 + 1 - 2]);

var a = 10;
console.log(array[a - 6 - 1]);

console.log("-----------------")

console.log(car[ "speed" ]);

console.log(car["engine"]["pistons"][1]["maker"]);
console.log(car["drive"]());

console.log("-----------------");

var pointer = "make";

console.log(car[pointer]);

console.log(car["en" + "gine"]);