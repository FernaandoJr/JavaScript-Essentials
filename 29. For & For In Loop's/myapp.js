var List = [
    "Fernando Divino",
    "Manoel Linhares",
    "Nelson Magalhães",
    "Henrique Moraes",
    "Joaquim Pedroso",
    "Álvaro Fernandes",
    "Leonardo Hashimoto",
    "Cauê Fontes",
    "Davi Gimenes"
]

for(var i = 0; i < List.length; i++){
    console.log(List[i]);
}

console.log("-----------------");

for(var i = List.length - 1; i >= 0; i--){
    console.log(List[i]);
}

console.log("-----------------");

for(var index in List){
    console.log(List[index]);
}