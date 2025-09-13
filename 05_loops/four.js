// forin => always print key 
// we can use print objects  
const myObject = {
    js: 'javaScrit',
    cpp: 'C++',
    rb: 'ruby',
    pt: 'phython'
}

// for (const key in myObject) { // when we want to print only keys
//   console.log(key);
// } 

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);   // if we print this then index comes 
}
for (const key in programming) {
    // console.log(programming[key]);  // for print key
}


// const map = new Map
// map.set('IN', 'India')
// map.set('USA', 'United State of India')
// map.set('Fr', 'france')
// map.set('IN', 'India')

// for (const key in map) {
//     console.log(key);
// }  map is not working on for in 

