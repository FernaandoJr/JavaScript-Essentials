function Apple(x, y, color, score){
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
}

var apple1 = new Apple(10, 20, "red", 295);
var apple2 = new Apple(17, 95, "blue", 615);
var apple3 = new Apple(96, 92, "green", 123);
var apple4 = new Apple(58, 69, "yellow", 595);

console.log(apple1);
console.log(apple2);
console.log(apple3);
console.log(apple4);