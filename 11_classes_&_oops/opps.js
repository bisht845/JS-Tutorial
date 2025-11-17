// ********** Object litral ***************
// An object literal is the simplest and most direct way to create a single object using {}.
// OR 
// Object literal creates a single object using curly braces, best for simple or one-time data.

// const user = {
//     username: "saurav",
//     loginCount: 8,
//     singedIn: true,

//     getUserDetails: function (){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${username}`); // we can't access this code We must use this keyword 
//         console.log(`username: ${this.username}`);
//         // In a simple way we use this for a current context 
//         console.log(this); // now we check the works of this keyword x
        
        
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());


// **************** Constructer Function *****************
/* A constructor function is a regular function used to create multiple objects with the same structure.
 Objects created with it use the new keyword.
 OR 
 A constructor function is a blueprint for creating objects. It works with the new keyword,
  uses this to assign values, and supports inheritance via prototypes.
*/

function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this

}

const userOne = new User ("Saurav", 12, true)
const userTwo = new User("ChaiAurCode", 15, false) // if we don't use new keyword then the variable will override

console.log(userOne.constructor);
// console.log(userTwo);


/*
⭐ Important Points / Conditions
1️⃣ Name starts with Capital Letter (convention)

Example: Person, Car, User

2️⃣ Must be called with new keyword

Otherwise this will refer to window (in browser).

3️⃣ this refers to the new object

Inside a constructor, this = object being created.

4️⃣ No explicit return needed

JS returns the new object automatically.

5️⃣ Methods should be written inside prototype

To save memory:

Person.prototype.sayHi = function() {}

6️⃣ Used for creating multiple similar objects

Example: new Car(), new User(), new Student()
*/