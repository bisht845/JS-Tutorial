// +++++++++ Scopes  +++++++++++ //
// * Blocks = { }.
// * Block scope means a variable is only accessible inside the curly braces { } where it is declared.
// * This came with ES6 (2015) using let and const.
// * Variables declared with let and const are block-scoped.
// * Variables declared with var are NOT block-scoped → they “leak” out of the block.
// Global Scope => A variable has global scope if it is declared outside of all functions or blocks.
// It means the variable is accessible anywhere in the program.
// let => let → You can reassign values.
// Const => const → You cannot reassign values (constant).

if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Saurav"
    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()  

if (true) {
    const username = "saurav"
    if (username === "saurav") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);

}
// console.log(username);

// +++++++++++++++++++ intersting  +++++++++++++++++++++++ 
// Hoisting => In JavaScript, function declarations and variable declarations are moved ("hoisted") to the top of their scope
//  during the compilation phase (before code execution).
// * JavaScript moves the function declaration to the top.
// * So, by the time console.log(addOne(5)) runs, the function addOne is already available in memory.

console.log(addOne(5)) // if we access the value in outside of function then we returns value

function addOne(num) {
    return num + 1
}

const addTwo = function (num) { 
    return num + 2
}
// Function Declaration ( Declared early” (hoisted fully) ) =>  (function addOne() {}) → Fully hoisted → ✅ Can call before definition
// Function Expression  ( “Exists later” (not hoisted) ) =>  (const addTwo = function() {}) → Not fully hoisted → ❌ Cannot call before definition.

// *  This won’t work because function expressions (with const, let, or var) are not hoisted the same way. 
// *  var = "Hoisted with  undefined".
// *  let / const = "Hoisted but stay in Temporal Dead Zone (TDZ) until declaration line.

console.log(addTwo(6))