// IF statements = if a condition is true execute some code
//                 if not, do something else

// let time = 14;

// if(time < 12){
//     console.log("Good morning");
// }
// else{
//     console.log("Good afternoon!");
// }


//Boolean

// let isStudent = true;

// if(isStudent){
//     console.log("You are a student!");  
// }
// else{
//     console.log("You are not a student!");
// }

//Nested if statements

// let age = 15;
// let hasLicense = true;

// if(age >= 16){
//     console.log("You are old enough to drive");

//     if(hasLicense){
//         console.log("You have a driving license");
//     }
//     else{
//         console.log("You do not have a driving license");
//     }

// }
// else{
//     console.log("You must be 16+ to have license")
// }

//Order of if statments is important

let age = -101;

if(age >= 18) {
    console.log("You are old enough to enter this site");
}
else if(age < 0){
    console.log("Your age can't be below zero");
}
else if(age >= 100){
    console.log("You are too old to enter this site");
} //for example here this must be move to first position
// cause thats the most apporiate for age = -101
// and also we exectued first the age >= 18 so it will never be executed


else{
    console.log("You must be 18+ to enter this site");
}