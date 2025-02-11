function printHeart() {
    console.log("<3");
}
printHeart(); // Output: <3

function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20

let animal = "Giant Pacific Octopus";

function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
}

observe(); //Pajama Squid

let deadlyAnimal = "Blue-Ringed Octopus";

function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
}

handleAnimal(); //  Scorpionfish
console.log(deadlyAnimal); // Blue-Ringed Octopus

const sayHello = (name) => `Hello ${name}!`;

console.log(sayHello("Hagrid")); // Hello Hagrid!
console.log(sayHello("Luna")); // Hello Luna!