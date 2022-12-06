let inventory = [];

let item1 = {
    name: "laptop",
    model: "DELL",
    cost: 10.5,
    quantity: 1
}

let item2 = {
    name: "Watch",
    model: "Casio",
    cost: 100.99,
    quantity: 4
}

let item3 = {
    name: "Headphones",
    model: "Sony",
    cost: 99.9,
    quantity: 15
}

inventory.push(item1, item2, item3);
console.log(inventory);
console.log("Quantity of the third item is: ", inventory[2].quantity);