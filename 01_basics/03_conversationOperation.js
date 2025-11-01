let score = "33abc"

console.log(typeof score)

let val = Number(score) 

console.log(typeof val) // ye number to dikhayega lekin number me convert nhi karega

console.log(val) // NaN

console.log("For Null")
let s = null 
let v = Number(s)
console.log(typeof s)
console.log(v)



// 33 => "33"
// "33abc" => NaN
// true =>1 ; false => 0

let isLoggedIn = 1
let boolisLoggedIn = Boolean(isLoggedIn)
console.log(boolisLoggedIn);


// 1 => true , 0 => false
//"" => false
//"mayank" => true 

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)