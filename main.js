///////////////////////////////////////////////////////////////////////
//main.js
//Created by Elliot Eckholm
///////////////////////////////////////////////////////////////////////

//math lib
var Parser = require('expr-eval').Parser;


function optimize() {


    var fitnessFunction = document.getElementById("fitnessFunction");
    var parameter = document.getElementById("parameter");



    var formula = fitnessFunction.value;
    var expression = Parser.parse(formula);
    var result = expression.evaluate({ x: parameter.value });




    document.getElementById("result").innerHTML = result.toString();
}

window.optimize = optimize;
