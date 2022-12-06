let myCar = {
    make: "Ford",
    model: "Fiesta",
    year: 2012,
    color: "green"
};

console.log("MyCar color: ", myCar.color);

let prop = "color";
myCar[prop] = "red";
console.log("MyCar new color: ", myCar.color);

prop = "forSale";
myCar[prop] = true;

console.log(`Car ${myCar.make} ${myCar.model} ${myCar.year}`);
console.log("For sale: ", myCar.forSale);

let naslov = document.getElementById("Naslov");
console.log(naslov);