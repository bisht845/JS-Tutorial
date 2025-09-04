// Arrays
//  Array start form [] and count from index (0)

const myArr = [1,2,3,4,5] // Number type 
// console.log("Index value", myArr[1]); 

const myHeors = ["Shaktiman", "Hathim"] // String type 
// console.log("Heors name..", myHeors[1]); 

const myArr2 = new Array(1, 2, 3, 4) // automatically convert to [] (brackets) and we can define new way 
// console.log("New Array", myArr[2]); 


// Arrays Methods

// myArr.push(6)  // add value in the array 
// myArr.push(7)  // same as up
// myArr.pop (5)  // remove the last value of the array and don't use perameter it can run only ()

// console.log(myArr);

myArr.unshift(9)  // add value in the first of array
myArr.shift()  // Remove the first value of the array and don't use perameter it can run only ()

// console.log(myArr);

// console.log(myArr.includes(9));  // .includes check the value that is it exist or not and always return boolean 

// console.log(myArr.indexOf(15));  // .indexOf check what is the position of the digit or value in array . and if value is not exist then returns always in -1 (minus)


// const newArr = myArr.join()  // always return value / array in a string and value is same but convert into string

// console.log(myArr);
// console.log(newArr);


// slice And splice 

// +++++++++++++++++++++++++ .Slice()   +++++++++++++++++++++++++

// Slice --> copy part of an array (non-mutating (do not change the original array))
// The slice() method returns a shallow copy of a portion of an array without changing the original array.
// What it Does => Returns a new array containing elements from start (inclusive) up to end (exclusive). Does not change the original array (Untouched array).
// it’s a shallow copy: objects are copied by reference.
// If end is not given → it goes till the end of array.
// Useful when you don’t want to modify the original array.
// console.log("A ", myArr);
// Does NOT change the original array.
// Can also accept negative indexes (counting from end).
const myn1 = myArr.slice(1, 3)

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"]

const result1 = fruits.slice(1,3) // start with first (1) and end before you entered the value (3). count start value to before end value not count end value
const result2 = fruits.slice(2) //  when we entered direc value (when we not start to end value) then the value count after your value selected 
const result3 = fruits.slice(-2);  // ["orange", "grapes"] || negative indexes (counting from end).
console.log(result3);
// console.log(myn1);   
// console.log("B ", myArr);

// +++++++++++++++++++++++++ .Splice()   +++++++++++++++++++++++++ 

// Splice() use it for   -->  add/remove/replace (mutating (Change the original value of array)) 
// What it Does => Removing deleteCount items starting at start
// Always returns the array of deleted elements (possibly []).
// Changes the original array (mutating) 

const myn2 = myArr.splice(1, 3)

// console.log(myn1);
// console.log("C ", myn2);

// Ex: 1 = Remove Elements

const user1 = ["Saurav", "Himanshu", "pankaj"]

const remove =  user1.splice(1, 2) // array.splice(start, deleteCount)

// Ex: 2 = Add Elements (using ...items)

const user2 = ["Saurav", "pankaj"]

user2.splice(1, 0 , "karan", "Subham") // At index 1, delete 0, add "Karan" and "Subham".

// Ex: 3 = Replace Elements (remove + add together)

const user3 = ["Saurav", "pankaj", "Karan", "Subham"] 

user3.splice(2, 1, "Mohit","Vishal"); //  At index 2, remove "Karan", then insert "Mohit" and "Vishal" and add "subham".

// console.log(user3);





/*   ++++++++++++++++++ Imp Notes ++++++++++++++++++
  
📘 Mutating vs Non-Mutating Methods in JS Arrays
🔹 Mutating Methods

These change (mutate) the original array.

Examples:

Add/Remove Elements

push() → add at end

pop() → remove from end

shift() → remove from start

unshift() → add at start

splice() → add/remove/replace at any index

Rearrange

sort() → sort array in place

reverse() → reverse order

Fill/Copy

fill() → fill with given value

copyWithin() → copy part of array within itself

✅ Note: Mutating methods update the original array and usually return either the modified array or the removed elements.


🔹 Non-Mutating Methods

These do not change the original array. They return a new array or a new value.

Examples:

Extract / Copy

slice() → extract portion

concat() → merge arrays

flat() → flatten nested arrays

map() → transform elements

filter() → keep only matching elements

Search / Check

find() → find element

findIndex() → find index

includes() → check existence

indexOf() / lastIndexOf() → find position

Reduce / Join

reduce() → accumulate to single value

reduceRight() → same from right

join() → array → string

toString() → array → string

✅ Note: Non-mutating methods preserve the original array (good for immutability patterns).

*/