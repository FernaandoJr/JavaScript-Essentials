function name(){
    var fullname = "Lawrence Turton";

    function concat(name){
        return "Mr. " + name;
    }
    return concat(fullname)
}

function name2( intirename ){
    return intirename.firstname + intirename.lastname;
}
console.log(name2( {firstname: "Fernando", lastname: "Jr"} ));

function embed( param ){
    return param();
}
console.log(embed(function(){return "embed"}));