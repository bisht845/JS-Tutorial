// let myName = "saurav     "

// console.log(myName.length);


//  “We want to create a method. When someone gives any string with extra spaces,
//  the method should remove all the extra spaces and return the actual length of the string.”

let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Object.prototype.saurav = function(){
//     console.log(`saurav present in all objects `);
// }
// Array.prototype.heySaurav = function(){
//     console.log(`Now Array have the access of hey saurav`);
    
// }

// heroPower.saurav() 
/* It is the top-level parent of all objects in JavaScript.
 Every object, array, function can access anything added to Object.prototype.
 This means:

Every object in JavaScript will now have access to .saurav()

Including:

Normal objects, Arrays, strings, Functions, Custom objects
 */
// myHeros.saurav()
// myHeros.heySaurav()
// heroPower.heySaurav() // they have not access of heysaurav bcz we cleary difine only array not object 



// Inheritance   

const obj1 = {
  name: "saurav",
  power: "coding"
};

const obj2 = {
  city: "Almora"
};

// set prototype
// obj2.__proto__ = obj1; // This to old way to use this method

// console.log(obj2.name);     // "saurav"  (coming from obj1)
// console.log(obj2.power);    // "coding"  (coming from obj1)
// console.log(obj2.city);     // "Almora"  (its own property)


// modern Syntax 

Object.setPrototypeOf(obj2, obj1)
// check 
// console.log(obj2.name); // now he acces the value of obj1 

/*
🏁 Final Easy Summary

obj2 only knows its own properties.

If obj2 doesn’t have something → look at obj1.

setPrototypeOf(obj2, obj1) makes that connection.
*/

let anotherUsername = "SauravSingh    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}
anotherUsername.trueLength()
"Bishtji".trueLength()
"iceTea".trueLength()