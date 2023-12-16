function makeCoffe(sugar,milk){
    var instructions = "Boil Water";

    instructions += " pour into cup,";
    instructions += " add coffee granules,";

    if (sugar == 0) {
        instructions += " don't add spoons of sugar,"; 
    } else{
        instructions += " add " + sugar + " spoons of sugar";
    }

    if (milk == 0) {
        instructions += " and don't add milk."; 
    } else{
        instructions += " and add " + milk + "% milk.";
    }
    return instructions;
}

console.log(makeCoffe(2,20));