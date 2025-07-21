//checked = propery that determines the checked state of 
//          an HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {

    if(myCheckBox.checked) {
        subResult.textContent = "You have subscribed to our newsletter.";
        console.log(subResult.textContent);
    }
    subResult.textContent = "You have not subscribed to our newsletter.";

}