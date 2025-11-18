// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     enscryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserNAme(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")
// console.log(chai.enscryptPassword());
// console.log(chai.changeUserNAme());


// Behind the Scene the upper code write this method but we use class with constructer so we have a short code

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.enscryptPassword  = function(){
     return `${this.password}abc`   
}
User.prototype.changeUserNAme = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User("tea", "tea@gmail.com", "321")
console.log(tea.enscryptPassword());
console.log(tea.changeUserNAme());
