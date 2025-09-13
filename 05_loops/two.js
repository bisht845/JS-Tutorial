// while = same as a for loop

let index = 0
while (index <= 15) {
    console.log(`value of index is ${index}`);
    index = index+2
}

let myArr = ["batman", "spiderman", "superman"]

let arr = 0 

while (arr < myArr.length) {
    console.log(`value is ${myArr[arr]}`);
    arr = arr + 1
}

// do while = do work before check condition 

let score = 1

do {
    console.log(`score is ${score}`);
    score = score + 1
} while (score <= 10); 

// let score2 = 11

// do {
//     console.log(`score2 is ${score2}`);
//     score2 = score2 + 1 
// } while (score2 <= 10); 