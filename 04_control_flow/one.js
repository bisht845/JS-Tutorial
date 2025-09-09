// if (2 !== 3) {
//     console.log("executed");
// } else{
//     console.log("not executed");  }

// const temprature  = 52 
// if (temprature < 50) {
//     console.log("temprature is less then 50");  
// } else{
//     console.log("temprature is greater then 50");
    
// }

// const score = 200

// if (score >= 200) {
//     const power = "fly"
//     console.log(`user power ${power}`);
// }

const balance = 1000

// if (balance > 500) console.log("Balance is greater then 1000"); // single line
// if (balance > 500) console.log("test"), console.log("This is wrong way"); // Multiple line but not a good practice and readable
// Implisit scope(we use without curly braces) is a single line code avoid for multiple

// if (balance < 500 ) {
//     console.log("less then 500");    
// } else if (balance < 750) {
//     console.log("less then 750");
// } else if (balance < 950) {
//     console.log("less then 950");
// } else {
//     console.log("less then 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if (userLoggedIn && debitCard && 2==2) {
    console.log("allow to buy course");   
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}
//  Comparion Operaters 

// * < = Less then 
// * <= = Less then qual to 
// * > = Greater then
// * >= = Greater then qual to 
// * == = qual to 
// * != = Not qual to (Negative statemaent)
// * === = Value and type checking
// * !== = Not qual to with type checking 
// Logical Operators 
// * && = and  (Always true both statement then code will run )
// * || = or (if one statement is true code will run) 
