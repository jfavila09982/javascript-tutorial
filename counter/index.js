// COUNTER PROGRAM



const decreaseBtn = document.getElementById("decrementBtn");
const increaseBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;


function setToZero() {
    count = 0;
    countLabel.textContent = count;
}

increaseBtn.onclick = function(){
  

    
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    if(count === 0) {
        setToZero();
        return;
    }
    count--;
    countLabel.textContent = count;
    
   
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}