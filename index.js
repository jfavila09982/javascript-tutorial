

// How to accept user input

// 1. Easy way = window prompt
// 2. Better way = HTML textbox

let username;


document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("h1").textContent = `Hello ${username}`;
   
}
if(username !== undefined) { 
    document.getElementById("userInput")
}