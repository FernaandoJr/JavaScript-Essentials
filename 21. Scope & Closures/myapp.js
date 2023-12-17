function runExpression(){
    var a = 10;
    function add(){
        return a + 90;
    }
    return add();
}
console.log(runExpression());