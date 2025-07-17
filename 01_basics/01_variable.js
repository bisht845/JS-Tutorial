const accountId = 14524
let accountEmail = "saurabh@gmail.com"
var accountpassword = "12345"
accountCity = "Uttarakhand"

// accountId = 2  // Not allowed

accountEmail = "bisht@gmail.com"
accountpassword = "1111"
accountCity = "jaipur"
let accountState;
console.log(accountId);

/*  
prefer not to use var
because of issue in block scope and funtional scope
*/

console.table([accountId, accountEmail, accountpassword, accountCity,accountState])