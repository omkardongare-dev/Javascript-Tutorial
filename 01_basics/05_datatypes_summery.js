// # Primitive Data Types

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.5

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof anotherId);

console.log(id === anotherId);

const bigNumber = 39383833373838n


// # Reference Data Types (Non Primitives)

// 3 Types : Array, Object, Functions

const heros = ["thor", "spiderman", "black panther"];

let myObj = {
    name: "omkar",
    age: 21,
}

const myFunction = function(){
    console.log("hello word");
}
console.log(myFunction);

console.log(typeof scorevalue);
console.log(typeof myFunction);
console.log(typeof heros);

// https://262.ecma-international.org/13.0/index.html#sec-typeof-operator