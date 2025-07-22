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
       
    }
    else{
        subResult.textContent = "You have not subscribed";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with Visa.";
     
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = "You are paying with Mastercard.";
    }

    else if(paypalBtn.checked){
        paymentResult.textContent = "You are paying with PayPal.";
    }
  
  

}