let userInput = prompt("What's your age?");
console.log(typeof userInput, userInput);

let userAge = Number(userInput);
console.log(typeof userAge, userAge);

let message = "";

if(userAge >= 21) {
    message = "You can enter and drink alcohol";
} else if(userAge >= 19){
    message = "You can enter but can not drink alcohol";
} else {
    message = "You can not enter";
}

console.log(message);
// if(age => 21){
//     message = "You can enter and drink alcohol";
// }else if(age => 19) {
//     message = "You can enter but can not drink alcohol";
// } else {
//     message = "You can not enter";
// }

// console.log(message);