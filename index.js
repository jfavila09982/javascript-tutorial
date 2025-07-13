

// How to accept user input

// 1. Easy way = window prompt
// 2. Better way = HTML textbox



document.getElementById("increment").addEventListener("click", function(){
    let value = document.getElementById("value");
    value.innerHTML = parseInt(value.innerHTML) + 1;
});

document.getElementById("decrement").addEventListener("click", function(){
    let value = document.getElementById("value");
    let newValue = parseInt(value.innerHTML) - 1;
    if (newValue < 0) { 
        newValue = 0; // Prevent negative values
    }
    value.innerHTML = newValue;
        
});