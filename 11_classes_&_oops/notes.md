## javaScript and Classes

## OOP

## Object 
__ colletion of properties and methods
__ object like => promises, toLowerCase, toUpperCase etc


## Why use OOP (Object Oriented Programing)

## Parts  of OOP
Object literal => objects means literaly object{}

__ Constructor funtion  => The new keyword creates a new instance from a constructor function. “Constructor function + new keyword = new instance (object)”

__ Prototypes => Prototype is an object in JavaScript from which other objects inherit properties and methods.
Every function and object in JavaScript automatically has a prototype.
JavaScript uses prototype-based inheritance, NOT class-based inheritance.

🌟   Minor but Important Points

✔ prototype exists only in functions (constructor functions, classes)
✔ __proto__ exists in objects
✔ Methods put in prototype are not duplicated
✔ Changing prototype affects all objects created
✔ Prototype is used for inheritance
✔ Every object has a prototype except Object.prototype
✔ Prototype chain ends at null 
__ Classes
__ Instances (new,this keyword)

⭐ Notes: new Keyword in JavaScript
✔ Definition:

The new keyword is used to create a new object from a constructor function or class. It sets up inheritance and initializes the object.
new creates a new object, connects it to the prototype, calls the constructor with this, and returns the object.    

⭐ Responsibilities of new keyword (Very Important)

1️⃣ Creates a new empty object

A fresh object is made internally.

2️⃣ Sets the prototype of the new object

Links the new object to:

## ConstructorFunction.prototype

This allows the object to inherit methods.

3️⃣ Binds this to the new object

Inside the constructor, this refers to the newly created object.

4️⃣ Returns the new object automatically

If the constructor does not return anything, the new object is returned by default.


## 4 pillers of Objects
__ Abstraction   => Hides complexity and show only simple use 
__ Encapsulation => Wrapping up the data under a single unit
__ Inheritance   => allows one class to use the properties and methods of another class without rewriting the code
__ Polymorphism  => one methods output different methods like: console




















************** About setTimeout() *********************
// we use setTimeout and setTimeInterval is in the folder of async bcz they are part of async. JS asynchronous language h but uska default behaviour synchronous hota h. Us behavior ko hame forcefully bta kr async bnana pdta h. Sbse easy example h aapke settimeout or setinterval methods. 


// JSON Formatter => This is website to use unreadable api data to convert readable