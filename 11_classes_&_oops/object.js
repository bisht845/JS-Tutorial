function multipleby5 (num){
    return num*5
}

multipleby5.power = 2

console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

// when we use this function then function is confused that which one i increase the price both are use same function
// how to know creaUser what his increase price chai or tea createUser is confused he confused who called me in both variable
// this => jis || jisne bhi bulaya(current context)

chai.printMe()