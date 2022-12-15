
let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);
let userInput = parseInt(prompt("Enter a number between 0 and 10"));

let messege = userInput > randomNumber ? 
"Your number is greater then the random number" : userInput < randomNumber ? 
"Your number is smaller then the random number" : "Your guessed the number!!!";
console.log(messege);
