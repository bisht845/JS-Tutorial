// reduce 

const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`my acc is :- ${acc} and my currval is :- ${currval}`);
    
//   return acc + currval
// }, 0) // initial value


const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)

console.log(myTotal);


const myShoppingCart = [
    {
        itemname: 'js Course',
        price: 999
    },
    {
        itemname: 'py Course',
        price: 2999
    },
    {
        itemname: 'mobile dev Course',
        price: 5999
    },
    {
        itemname: 'data science Course',
        price: 12999
    },
]
const pricetoPay = myShoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(pricetoPay);
