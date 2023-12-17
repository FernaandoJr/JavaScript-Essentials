var engine = {
    maker:"ford",
    headGasket:{
        maker: "golf",
        pots:[
            "piston1",
            "piston2"
        ]
    }
};


function runExpression(){
    var a = 10;

    function add(){
        // engine = "New String" - Vai mudar o valor independente do escopo
        var engine = "new String"; // vai mudar o valor apenas no escopo
        test = "new String"; // vai criar uma variavel global desnecessária
    }
}