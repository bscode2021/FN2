// kreiranje na prazen na arej
let shoppingList = [];
// dodavanje na vrednisto vo arrejot
shoppingList.push("Milk", "Bread", "Apples");

// naoganje na pozicijata na vrednosta "Bread"
let indexOfBread = shoppingList.indexOf("Bread");
// nacin za updejtiranje na odredane vrednos vo arej
// arr.splice(index na pozijata kade sakeme da dodademe, 
//            broj na elementi sto sakame da gi izbriseme, 
//            vrednostite sto gi dodavame : "Bananas", "Eggs");
shoppingList.splice(indexOfBread, 1, "Bananas", "Eggs");

console.log("Poslediot izbrishan element: ",shoppingList.pop());

shoppingList.sort();

console.log(shoppingList.indexOf("Milk"));

let indexOfBanana = shoppingList.indexOf("Bananas");
shoppingList.splice(indexOfBanana + 1, 0, "Carrots","Lettuce");

let newshoppingList = ["Juice", "Pop"];
let combinedShoppingList = shoppingList.concat(newshoppingList, newshoppingList);
let lastIndexOf = combinedShoppingList.lastIndexOf("Pop");

console.log(lastIndexOf);
console.log(combinedShoppingList);

