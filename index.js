

// How to accept user input

// 1. Easy way = window prompt
// 2. Better way = HTML textbox

let arguments1;
let arguments2;
let expression;
let operator = "";



function addition(argument1, argument2) {
    return argument1 + argument2;
}

function subtraction(argument1, argument2) {
    return argument1 - argument2;
}

function multiplication(argument1, argument2) {
    return argument1 * argument2;
}

function division(argument1, argument2) {
    if (argument2 === 0) { 
        alert("Cannot divide by zero.");
        return "undefined";
    }
    return argument1 / argument2;
}


document.getElementById("addition").onclick = function() {
    operator = "+";

    arguments1 = document.getElementById("argument1").value;
    arguments2 = document.getElementById("argument2").value;
 

    if(arguments1 === "" || arguments2 === "") {
         alert("Please enter both numbers."); 
         document.getElementById("expression").textContent = "";
         document.getElementById("result").textContent = "";
        return;
    }

    arguments1 = parseFloat(arguments1);
    arguments2 = parseFloat(arguments2);       

    result = addition(arguments1, arguments2);
    document.getElementById("expression").textContent = `${arguments1} ${operator} ${arguments2}`;
    document.getElementById("result").textContent = `Result: ${result}`;
    
    
}


document.getElementById("subtraction").onclick = function() {
    operator = "-";

    arguments1 = document.getElementById("argument1").value;
    arguments2 = document.getElementById("argument2").value;
 

    if(arguments1 === "" || arguments2 === "") {
         alert("Please enter both numbers."); 
         document.getElementById("expression").textContent = "";
         document.getElementById("result").textContent = "";
        return;
    }

    arguments1 = parseFloat(arguments1);
    arguments2 = parseFloat(arguments2);       

    result = subtraction(arguments1, arguments2);
    document.getElementById("expression").textContent = `${arguments1} ${operator} ${arguments2}`;
    document.getElementById("result").textContent = `Result: ${result}`;
    
    
}


document.getElementById("multiplication").onclick = function() {
    operator = "*";

    arguments1 = document.getElementById("argument1").value;
    arguments2 = document.getElementById("argument2").value;
 

    if(arguments1 === "" || arguments2 === "") {
         alert("Please enter both numbers."); 
         document.getElementById("expression").textContent = "";
         document.getElementById("result").textContent = "";
        return;
    }

    arguments1 = parseFloat(arguments1);
    arguments2 = parseFloat(arguments2);       

    result = multiplication(arguments1, arguments2);
    document.getElementById("expression").textContent = `${arguments1} ${operator} ${arguments2}`;
    document.getElementById("result").textContent = `Result: ${result}`;
    
    
}



document.getElementById("division").onclick = function() {
    operator = "/";

    arguments1 = document.getElementById("argument1").value;
    arguments2 = document.getElementById("argument2").value;
 

    if(arguments1 === "" || arguments2 === "") {
         alert("Please enter both numbers."); 
         document.getElementById("expression").textContent = "";
         document.getElementById("result").textContent = "";
        return;
    }

    arguments1 = parseFloat(arguments1);
    arguments2 = parseFloat(arguments2);       

    result = division(arguments1, arguments2);
    document.getElementById("expression").textContent = `${arguments1} ${operator} ${arguments2}`;
    document.getElementById("result").textContent = `Result: ${result}`;
    
    
}


