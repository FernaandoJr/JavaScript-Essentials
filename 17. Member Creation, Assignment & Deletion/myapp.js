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

console.log(car);
console.log(car.make = "ford");
console.log(car);

console.log(car.engine = { newengine: "new"});
console.log(car.engine);


console.log(car.drive = "drive");

console.log(car.model = 2);

console.log(delete car.model);
console.log(car);