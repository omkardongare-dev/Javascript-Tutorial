const name = "omkar"
const repoCount = 50

// console.log(name + repoCount + "Value");    // avoid this syntax

console.log(`hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String('omkar-dongare')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);

// methods in strings

console.log(gameName.toUpperCase());       
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherstring = gameName.slice(-3, 4);
console.log(anotherstring);

const newStringOne = "   omkar   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://omkar.com/omkar%20dongare"

console.log(url.replace('%20', '-'));

console.log(url.includes('Om'));

console.log(gameName.split('-'));