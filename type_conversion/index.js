
const PI = 3.14159;
let radius;
let circumference;

PI = 420.69; // This line will throw an error because PI is a constant and cannot be reassigned.git 

document.getElementById('mySubmit').onclick = function(){
    radius = document.getElementById('myText').value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = "Circumference: " + circumference;
   
}


