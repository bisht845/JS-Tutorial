const name = "Saurabh"
const repoCount = 50

// console.log(name + repoCount + "value");  this is old way & not readable code 

console.log(`Heloo my name is ${name} and my repo count is ${repoCount}` );   // use this way 

const gameName = new String ("Saurabh Singh")

console.log(gameName[0]);
// console.log(gameName__proto__);


console.log(gameName.length);  // length of value
console.log(gameName.toUpperCase()); // convert value in uppercase
console.log(gameName.charAt(2)); // show  letter of value
console.log(gameName.indexOf('r')); // Show number of value 

const newString = gameName.substring(0, 4) // show value after 4
console.log(newString);

const anotherString = gameName.slice(2, 4) // show value between 2 and 4 
console.log(anotherString);

const newStringOne = "   Saurabh   "
console.log(newStringOne);
console.log(newStringOne.trim());  // remove space of after & before value 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','_'));
console.log(url.replace('hitesh.com','rahul.com')); 

console.log(url.includes('hitesh')); // check the value if is available or not


