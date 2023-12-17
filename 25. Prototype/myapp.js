function Apple(x, y, color, score){
    this.x = x;
    this.y = y;
}

Apple.prototype = {
    eat(){ return "eating...";},
    throw(){ return "throwing...";}
}

var apple1 = new Apple(10, 20);
var apple2 = new Apple(17, 95);
var apple3 = new Apple(96, 92);

console.log(apple2.eat());


