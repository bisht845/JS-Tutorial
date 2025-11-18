function Setusername(username){
    // complex DB calls
    this.username = username    
    console.log("called");
    
}

function createUser(username, email, password){
    Setusername.call(this,username)
    
    this.email = email
    this.password = password
}

const chai = new createUser("Chai", "chai@fb.com", "123")

console.log(chai);
// when we use this code then the username is not printing 


/*
Setusername.call(this) → Use the createUser's object as your this.

createUser is making a new user object.

Setusername knows how to set a username.

But Setusername doesn’t know where to put the username.

So we use:

.call(this)

This tells Setusername:

🗣 “Use my object (this) to store the username.”
*/