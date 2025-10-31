const accountId = 144553 


// Variables -  initial days me java me scope ka bahut problem tha 
let accountEmail = "mayank@123.com" // most used 
var accountPass = "123456" // scope problems
accountCity = "Jaipur" // worst way 

let accountState // initially undefined 

// prefer not to use var because off issue in block scope and functional scope

// accountId = 2 ;

accountEmail = "hc@hc.com"
accountPass = "21212121"
accountCity = "delhi"
console.log(accountId);

console.table([accountId,accountEmail, accountPass , accountCity , accountState])