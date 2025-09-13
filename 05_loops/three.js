// for of loop 
// ["", "", ""]
// [{},{},{}]
// useful for print array
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);    
}

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps 
// Create a object , Never print copy value,    

const map = new Map
map.set('IN', 'India')
map.set('USA', 'United State of India')
map.set('Fr', 'france')
map.set('IN', 'India')

// console.log(map);

// for (const key of map) {
//     console.log(key);    
// }
for (const [key, value] of map) { // If we want key or value pair like object 
    console.log(`${key} :- ${value}`);    
}

// map in Object

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(myObject);
// } for of loop is not working on objects