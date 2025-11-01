// kis tarah se data ko store kiya jata hai or memory me access kiya jata hai


// Primitive (call by value  (copy)) 
// 7 types String ,  Number , Boolean , null(empty) , undefined , Symbol , BigInt 


// js is dynamically typed  because 
let myVariable = 10; // myVariable is a number
myVariable = "Hello"; // myVariable is now a string
myVariable = { name: "John" }; // myVariable is now an object

// Reference (Non primitive)
// Array(type-Object) , Objects , Functions(type - Function object)



// A Symbol is a unique and immutable value that’s often used as an identifier for object properties — meaning no two symbols are ever the same, even if they have the same description.
const s1 = Symbol('id');
const s2 = Symbol('id');

console.log(s1 === s2); // false ❌ (each symbol is unique)


const bignumber = 3243524254324547765645n


// Arrays
const heros = ["shaktiman" , "naagraj" , "doga"] ;

// Objects 
let myObj = {
    name : "mayank",
    age : 22  ,
}

const myFunction = function(){
    console.log("hello\n");
}

console.log(typeof null);
console.log(typeof undefined)
console.log(typeof myFunction)
console.log(typeof myObj) // Object
console.log(typeof s1); // Symbol

