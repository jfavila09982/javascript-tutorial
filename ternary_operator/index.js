//ternary operator = a shorcut to if {} and else {}  
//                   a helps to assign variable based on a condition
//                   condition ? codeIfTrue : codeIfalse;

// let age = 21;
// let message;

//Simple if statement
// if(age >= 18){
//     message = "You are an adult";
// }
// else{
//     message = "You're an minor";
// }
// console.log(message);



//Using ternary operator
// let message = (age >=18) ? "You are not a minor" : "You're still a minor"


//1. Exercise 
// Even Or Odd using ternary:

// let num = 10;

// let message = (num % 2 == 0) ? "Its even" : "Its odd";
// console.log(message);


//2. Exercise (Pass or Fail)

// let score = 55;

// let message = (score >= 60) ? "Passed" : "Fail"


//3. Exercise: Username Check

// Username Check:
// Set greeting to "Welcome, admin!"
// if username is "admin", otherwise "Welcome, guest!".


// let username = "admin"

// let message = (username != "admin") ? "Welcome, guest!" : "Welcome admin!"
// let message = (username == "admin") ? "Welcome admin" : "Welcome guest!"

//4. Sample Case:  You are student

// let isStudent = true;

// let message = isStudent ? "You are student" : "You are NOT a student";
// console.log(message);

//5. Sample Case: purchaseAmount

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`)