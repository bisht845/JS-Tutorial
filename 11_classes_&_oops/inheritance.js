class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User {   
    // 👉 extends is a modern, cleaner shortcut for prototype inheritance using Object.setPrototypeOf internally.
    // extends works (as we learn previos file) that access the value of other variable
    constructor(username, email, password){
        super(username)  // super is daufault method they works of call and this (as we learn previous file). we use class then code is short to using super
        this.email = email
        this.password = password
    }
        addCourse (){
            console.log(` A new course was added by ${this.username}`);
            
        }
    }

    const chai = new Teacher("chai", "chai@teacher.com", "456")

    chai.addCourse()

    const masalaChai = new User("masalaChai")
    // masalaChai.addCourse()// that have not access the addcourse bcz addCourse in Teacher funtion

    masalaChai.logMe()

    console.log(chai instanceof Teacher); // istance works that is Teacher a part of user 
    