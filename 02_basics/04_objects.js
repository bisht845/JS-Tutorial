const tinderUser = new Object() // This is a singleton object 
// const tinderUser = {}  // This is a non singletion object but both output some same nothing change

tinderUser.id = "123abc"
tinderUser.name = "Saurav"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com" ,
    fullname : {
        userfullname:{
            firstname : "Saurav",
            lastname : "Singh"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname); 

const obj1 = {1:"a" , 2: "B", 3: "c"} 
const obj2 = {1:"a" , 2: "B", 3: "c"} 

// const obj3 = {obj1,obj2} // This is not way to concat this because object his return object inside the object not that value

// const obj3 = Object.assign({}, obj1, obj2)  
// With {} => if we use {} obj1 remains unchanged, because we gave an empty object {} as the target.
// Without {} → changes the first object (obj1) directly and No error in output but behavior changes.

const obj3 = {...obj1, ...obj2} // Letest way 
// console.log(obj3);


const users = [
    {
        email: "saurav@yahoo.com",
        phoneno: "123456789"
    },
    {
        email: "saurav@sbi.com",
        phoneno: "123456789"
    },
    {
        email: "saurav@youtube.com",
        phoneno: "123456789"
    },
    {
        email: "saurav@yahoo.com",
        phoneno: "123456789"
    }
]
console.log(users[0].email); //  way to access value in array of objects

console.log(tinderUser);
console.log (Object.keys(tinderUser)) ; 
// Object.keys =>  ways to get only keys in the objects .Always give output with an array 
// *  Returns an array of all property names (keys) of an object.

console.log(Object.values(tinderUser));
// Objects.value =>  way to get value in the objects. 
// * Returns an array of all property values of an object.

console.log(Object.entries(tinderUser));
// Objects.entries => returns [key, value] pairs as an array 

console.log(tinderUser.hasOwnProperty('isLogged'));
// hasOwnProperty  => hasOwnProperty → checks only the object itself. if exist then return true otherwise false
