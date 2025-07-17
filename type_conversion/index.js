
const PI = 3.14159;
let radius;
let circumference;

// PI = 420.69;  //will cause an error because PI is a constant
radius = window.prompt('Entrer the radius of the circle:');
radius = Number(radius);

circumference = 2 * pi * radius;

console.log('The circumference of the circle is: ' + circumference);