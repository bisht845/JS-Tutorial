// ## In this file we know that if we change the value of Math.PI if yes then do if no then why not,
// we know in behind the scene (BTS)

const discripter =  Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(discripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); //  so in this code we don't overwrite the value of Math.PI


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderchai: function(){
        console.log("chai nhi bni"); 
        // when we console this then the whole funtion will show in output which is not right bcz we want show only key value pair
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name',{ 
    // ##  use this defineproperty now anyone can't change the name bcz we changed the setting in BTS
    // writable: false,
    enumerable: false // to use this we don't show the name value in output 
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== ('function')){
        console.log(`${key} : ${value}`);
    }
    // this if to use to avoid that when the whole funtion in come in output while we don't need that
}

/*

⭐ 1. writable

➤ “Can we change the value?”

true → value can be changed

false → value cannot be changed

⭐ 2. enumerable

➤ “Should this property appear in loops?”

true → property shows in
for...in, Object.keys(), JSON

false → property hidden in loops

⭐ 3. configurable

➤ “Can we delete or modify this property?”

true → we can delete or change the descriptors

false → property is locked forever
*/