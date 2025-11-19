class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email (){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}saurav`
    }
    set password(value){
        this._password = value
    }
}

const saurav = new User("saurav@ai", "abc")
console.log(saurav.password);
console.log(saurav.email);


/*
⭐  In JavaScript, getter and setter are special methods inside objects or classes that help you:

getter → get (read) a property

setter → set (update) a property

⭐  Why underscore _name?

It is a private-like variable used internally.

⭐ Very Simple Meaning
✔ Getter = When you want to read value safely
✔ Setter = When you want to validate or modify value before saving
✔ Getter & setter function names MUST be same
This is required so JavaScript knows they belong to the same property.
*/