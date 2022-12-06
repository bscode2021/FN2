// console.log("Boban");

/*
Multi 
Line 
Comment
*/

/*
let userName = prompt("Insert your name!");
alert("Vaseto ime " + userName + " e procesirano!");
console.log(userName);
*/


let randomNum = Math.random() * 3;
console.log("My random number: " + randomNum);
let roundNum = Math. floor(randomNum) + 1;
console.log("My rounded number: " + roundNum);

let num = prompt("Guess a number from 1 to 3");

if (roundNum == num) {
    alert("You guessed right!");
} 
else {
    alert("You guessed wrong!");
}