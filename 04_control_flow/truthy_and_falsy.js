// Truthy value and falsy value 

const userEmail = []

if (userEmail) {
    console.log("Got the user email");
} else {
    console.log("Don't have user email");
}

// Truthly value = "0", 'false', " ", {}, [], function () {}
// Falsy value => false, 0, -0, bigInt (on), null, undifined, NaN 


// if (userEmail.length === 0) {
//     console.log("Array is empty");
//     // to check array empty or not 
// }

// const emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log("object is empty");
//     // check object empty or not 
//     // object.keys() return a array []
// }

// Nullish Coalescing Operator (??) use for only null & undefined

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10 // if my value comes null then my imp code is run and if comes null then handle the code situation
val1 = undefined ?? 15
console.log(val1);
 
// Turniary Operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more then 80") : console.log("less then 80");
;



/*  Key Notes to Remember 

// ** if "0" we type zero with string then its truthy value
// ** if we type 'false' with single cot then its also truthy value 
// ** if we type " " empty string with a space then its also truthy value
// ** if we type empty [] || {} || function () {} this value also truthy

// when we use below value in console and other 
 ** false == 0 (true)
 ** false == '' (true)
 **  0 == ''  (true)


*/