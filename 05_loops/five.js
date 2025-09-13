// for Each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
    
// } )

// coding.forEach( (item) =>{  arrow funtion
// console.log(item);
// } )

// function printme (items){ // we can use this way 
//     console.log(items);
// }
// coding.forEach(printme)
 
// coding.forEach ( (items, index, arr)=> {  for print items, index, and arr of my array
//     console.log(items, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach ( (items)=>{
    console.log(items.languageName);
    
} )