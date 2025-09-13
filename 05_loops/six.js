// const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach ( (item) => {
//     console.log(item);
//      return item // for each never returns values 
// } )

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4) // Implicit Return
// const newNums = myNums.filter( (num) => { // Explicit Return
// return num > 4
// } )

const newNums = []  // same as result with for each 

myNums.forEach( (num) => {
    if (num > 4) {
        new Nums.push(num)
    }
} )

console.log(newNums);   // filter always returns values 

const books = [
    { 
        title: 'Books One ',
        genre: 'Fiction',
        publish: 1981,
        edition: 2004
    },
    { 
        title: 'Books Two ',
        genre: 'Non-Fiction',
        publish: 1992,
        edition: 2008
    },
    { 
        title: 'Books Three ',
        genre: 'History',
        publish: 1999,
        edition: 2007
    },
    { 
        title: 'Books Four ',
        genre: 'Non-Fiction',
        publish: 1989,
        edition: 2010
    },
    { 
        title: 'Books Five ',
        genre: 'Science',
        publish: 2009,
        edition: 2014
    },
    { 
        title: 'Books Six ',
        genre: 'Fiction',
        publish: 1987,
        edition: 2010
    },
    { 
        title: 'Books Seven ',
        genre: 'History',
        publish: 1986,
        edition: 1996
    },
    { 
        title: 'Books Eight ',
        genre: 'Science',
        publish: 2011,
        edition: 2016
    },
    {
        title: 'Books Nine',
        genre: 'Non-Fiction',
        publish: 1981,
        edition: 1989
    }
]
 
let userBooks = books.filter( (bk) => bk.genre === "History")

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
} )

console.log(userBooks);
