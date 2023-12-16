
var array = [
    "String",
    100,
    ["embed", 200],
    {car: "ford"},
    function(){return "drive";},
]

console.log(array[0]);
console.log(array[0] = "new string");
console.log(array);

console.log(array[0] += " concat");
console.log(array);

console.log(array[20] = 2023);
console.log(array);

console.log(array["test"] = "test");
console.log(array.test2 = "test2");
console.log(array);

console.log(array.length);

var array = [
    "String",
    100,
    ["embed", 200],
    {car: "ford"},
    function(){return "drive";},
    "new value!"
]

console.log(array.shift());
console.log(array);

console.log(array.pop());
console.log(array);


console.log(array.unshift("string", 100.1, 10, function(){return "ola"}, {}, []));
console.log(array);

console.log(array.push(100, 200, 300));
console.log(array);

var array = [
    "String",
    100,
    ["embed", 200],
    {car: "ford"},
    function(){return "drive";},
    "new value!"
]

console.log(array.splice(2,3));
console.log(array);

console.log(array.splice(1, 0, "hello", "world", 451, 591));
console.log(array);