const user = {
    username : "saurav",
    price : 999,

    welcomeMsg : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this); // this tell about current context 
        
    }
}
// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

console.log(this); 
// * when we use node environment(engine) then this return empty{} .
// * Browser use global object {} so then we run window events


// function chai (){
//     let username = "saurav"
//     console.log(this.username);
    
// }
// chai()

// const chai = function (){
//     let username = "saurav"
//     console.log(this.username);
    
// }
const chai =  () => {
    let username = "saurav"
    console.log(this.username);
    
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => ( num1 + num2 ) //  You do not write return.
// ** When we use curly braces {} then we type return for execute
// ** when we parenthesis () we don't need to type return 
console.log(addTwo(5, 5));


// Explicit Return => You write the return keyword to give back a value. 
// * If you use { } curly braces, you must write return.
// Implicit Return => You do not write return.
// *  The value is automatically returned (only works in arrow functions with a single expression)


// const addThree = (num1, num2) => {username: "saurav"}  // if we type this way we don't execute the object
const addThree = (num1, num2) => ({username: "saurav"})  // to way to execute objects with parenthesis ()

console.log(addThree(3, 4));
