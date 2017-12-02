///////////////////////////////////////////////////////////////////////
//main.js
//Created by Elliot Eckholm
///////////////////////////////////////////////////////////////////////

//math lib
var Parser = require('expr-eval').Parser;


window.optimize = function() {

    //load input
    var parameter = document.getElementById("parameter");
    //var params = parameter.value.split(",");
    var fitnessFunction = document.getElementById("fitnessFunction");
    var parameterValue = document.getElementById("parameterValue");
    //var paramValues = parameterValue.value.split(",");

    //interpret math
    /*
    var expr1 = Parser.parse(fitnessFunction.value);
    for (i = 0; i < params.length; i++) {
      var expr2 = expr1.substitute(params[i].value, "x");
      var result = expr2.evaluate({ x: paramValues[i].value });

    }*/
    var expr1 = Parser.parse(fitnessFunction.value);
    var expr2 = expr1.substitute(parameter.value, "x");
    var result = expr2.evaluate({ x: parameterValue.value });


    //print results
    document.getElementById("result").innerHTML = result.toString();

}
