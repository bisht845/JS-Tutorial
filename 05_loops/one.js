// Iteration(loops)

// for loop 

// for (let i = 0; i <= 10; i++) {
//       const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
  
// }


// console.log(element); not executed bcz log is out of block scope 


// Nested Loop

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);

   for (let j = 0; j <= 10; j++) {
    // console.log(`inner Loop value ${j} and inner loop value: ${i}`);
   }
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);

   for (let j = 1; j <= 10; j++) {
    // console.log(i + '*' + j + ' = ' + i*j);
   }
}

const myArr = ["superman", "batman", "flash", "spiderman"]
// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// Break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5"); 
        break // if we want to break the loop after match condition then we use
    }
    console.log(`value of i is ${index}`);    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5"); 
        continue // (skip and continue) its work that when our condition is match he skip this and execute the code but exit loop
    }
    console.log(`value of i is ${index}`);    
}

// key Notes to Remember 
// ** if we don't write index++(work condition change) then code run infinity because cotidion is not match