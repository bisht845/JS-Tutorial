class User {
    constructor(username) {
        this.username = username
    }
    logMe (){
        console.log(`username : ${this.username}`);
    }

    static createId (){ // “Static does not get shared with objects, but static DOES get inherited by child classes.” 
        return `123`
    }
}

const saurav = new User ("Saurav")
// console.log(saurav.createId());

class Teacher extends User{
    constructor(username, email){
        super(username) // super is used to call the parent class’s constructor or method nd Helps child class access parent class
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@.com")

// console.log(iphone.createId());


class Parent {
    static greet(){
        console.log("Hello from Parent");
    }
}

class Child extends Parent {}

Child.greet();

/*
static keyword creates class-level methods or properties.
These belong to the class itself, not to its objects.
*/