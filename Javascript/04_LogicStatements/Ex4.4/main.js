let randomNumber = Math.floor(Math.random() * 6);
console.log(randomNumber);

let userInput = prompt("Ask your question.");
let answer = "";

switch(randomNumber) {
    case 0:
        answer = "Yes";
        break;
    case 1:
        answer = "No";
        break;
    case 2:
    case 3:
        answer = "Someday";
        break;
    case 4:
        answer = "Never";
        break;
    case 5:
        answer = "Keep Dreming";
        break;
}

console.log(userInput);
console.log(answer);