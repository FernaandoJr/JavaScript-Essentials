if (true){
    var varName = "value reference in memory";
    let letName = "Scoped Value";
    const constName = "constant value in memory";
}

console.log(varName);
console.log(constName);
console.log(letName);


function check(){
    var varSymbol = "Assign a value"; // var só respeita o escopo de funções
}