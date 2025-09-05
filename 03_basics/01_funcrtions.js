function myName () {
 console.log("S");
 console.log("a");
 console.log("u");
 console.log("r");
 console.log("a");
 console.log("v");
 
}
// myName()  // if we write only function name (myName) thats called function refrence.. if we use parentheis () thats called execution.

// function addTwoNumber (nubmer1, nubmer2) {
//     console.log(nubmer1 + nubmer2);
    
// }
// Parameters: a, b
function add(a, b) {
  return a + b;
}

// Arguments: 5, 10
// console.log(add(15, 10)); // Output: 15

// *  a and b → Parameters (waiting for values).
// *  5 and 10 → Arguments (actual values we give).

// Parameters → Placeholders/variables inside the function definition.
// Arguments → Actual values we pass when calling the function.(when we return a value )

// addTwoNumber(3,"5") //  if we write one value in string then he concate the value like (3,"5" = 35)

function addTwoNumber (nubmer1, nubmer2) {
    // let result = nubmer1 + nubmer2
    // return result
        return nubmer1 + nubmer2 // we can also run code this way

    // console.log("Saurav");
    // The rule of function is after return any value or code is not execute 
    
}

const result = addTwoNumber(3, 5)
// console.log("Result: ", result);


function loginUserMsg (username){
    if(username === undefined){ // (!username(we can pass also this . ))
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in `
}
// console.log(loginUserMsg()); // if don't pass value he says that undifined(value is not define)


function calculateCartPrice (value1, value2, ...num1){ // In this we learn that how to pass value in rest operator(...) / multiple value
    return num1
}
// if we passed more perameters (value1, value2, ...num1) in function then the arguments will go in 1st and 2nd perameter .
// console.log(calculateCartPrice(100, 200, 400, 500, 100));

const user = {
    username : "saurav",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "pankaj",
    price : 159
})

const myNewArray = [100, 200, 300, 400] 

function returnSecondValue(getArray){
    return getArray[3]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 600])); // we can show result like this 
