const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Batman", "Flash"]

// marvelHeros.push(dcHeros)   // This is not right way to use merge array
// console.log(marvelHeros);

// Push() => The .push() method is used to add one or more elements to the end of an array.
// *  It modifies the original array and returns the new length of the array.
// *  .push() changes the original array.
// *  When we want a new array instead of modifying the original. .push() always modifies the same array. If you want a new array → use .concat() or spread operator.

// .Concat() => The .concat() method is used to merge two or more arrays (or values) into a new array.
// *  It does NOT modify the original arrays, instead returns a new array.
// *  Returns → a new array with merged elements.
// *  .concat() does NOT change the original array.
// *  Always returns a new array.

// const allHeros = marvelHeros.concat(dcHeros)  // Return new array 
// console.log(allHeros);

// ...Spread Operator => The spread operator (...) is used to expand (spread out) elements of an array, object, or string into individual elements.
// *  It does not modify the original value — it creates a copy.
// *  Can be used with arrays, objects, strings, function calls.
// *  Does not mutate (Change) the original array or object.
// *  Creates a shallow copy (nested objects/arrays still reference same memory).


// const allNewHeros = [...marvelHeros, ...dcHeros, "Saurav","Pankaj"]
// console.log(allNewHeros);


// const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5 ]]]

// const realAnotherArr = anotherArr.flat(Infinity) // remove nested array and covert with a single array
// console.log(realAnotherArr);


// .Flat => The .flat() method is used to create a new array with all sub-array elements concatenated (merge) into it.
//  * It reduces nested arrays into a single array (up to the depth you specify).
//  * It does not mutate the original array — it returns a new one.
//  * Syntax: array.flat(depth) depth → (optional) how deep a nested array should be concatenat.
//  * Can be Infinity to merged all levels.
//  * Default depth = 1, so it only flattens(concat) one level unless specified.

console.log(Array.isArray("Saurav"));  // Checks if a value is an array or not. Returns true if it’s an array, otherwise false.
console.log(Array.from("Saurav"));   // convert the value (array, string, object, map, arguments, NodeList, etc.) in a array 
console.log(Array.from({name : "saurav"})) // {name: "saurav"} is a plain object, not iterable(loopable(you cannot directly loop through it, because it doesn’t have that “chain” structure.)) , not array-like.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// Array.of => Array.of() creates a new array from the arguments you pass, no matter how many or what type they are.
// Always creates an array with given arguments as elements.

console.log(Array.of(5));  // Array.of = make array from values, not from length.

console.log(Array(5)); // Array() = size, (Creates array → number = size, not value.)
