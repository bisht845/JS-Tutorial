// Dates

let myDate = new Date ()

// console.log(myDate); // not showig understanding ways 
// console.log(myDate.toDateString()); // Now this is readable and understanding 
// console.log(myDate.toLocaleString()); // This also readable 
// console.log(typeof myDate); // date is always a object 


// let myCreatedDate = new Date(2023, 0, 23) // months is always start with 0 (0 = jan)

// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3) 
// console.log(myCreatedDate.toLocaleString());  // Thats clearify that months and time and am or pm 

// let myCreatedDate = new Date("2025-01-02 ") // yy-mm-dd
let myCreatedDate = new Date("02-10-2025") // mm-dd-yy

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // it runs in miliseconds 
// console.log(myTimeStamp);

let newDate = new Date() 

// console.log(newDate);
// console.log(newDate.getMonth()); // For showing individual things 
// console.log(newDate.getDay()); // same as up 

newDate.toLocaleString('default', {
    month: "long",
    weekday : "long",
    hour : "2-digit"
})

console.log(newDate);



