// Singleton 
// Object.create (Constructer Method)


// objects  literals
const mySym = Symbol("Key1") // if we want to show the symbol in object then we declare inside then we execute
const jsUser =  { 
    name: "Saurav",
    "full name": "Saurav Singh", // we can't access the key of full name with jsuser.full name Therefore we use to access for square notation jsuser["full name"] then we access the value 
    age : 18,
    [mySym] : "mykey1", 
    location: "Rohtak",
    email : "saurav@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Sunday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]); //  this method is square notaion because we don't use dot(.) for access the value

// console.log(jsUser.mySym); // if we access this way or check the typeof then it will show string 
// console.log(jsUser[mySym]); // we use square notaion ([]) in both side in the key (when we make symbol key) and when we execude the code in console then we check that typeof he returns always a symbol

jsUser.email = "saurav@youtube.com" // to update object key
// Object.freeze(jsUser) // it can freeze the object now i can't change the value of key .Don't show error and nothing change
jsUser.email = "saurav@chatgpt.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Helo JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Helo JS user ${this.name}`); // String interpolation means inserting variables or expressions inside a string instead of concatenating them manually.
}
console.log(jsUser.greeting); // show function refrence 
console.log(jsUser.greeting()); 
console.log(jsUser.greetingTwo());


// This commit only for the rename previous commit