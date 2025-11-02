const name = "mayank"
const repoCount = 50

console.log(name + repoCount + " Value"); // this type of writing a string is outdated 


console.log(`Hello my name is ${name} and my repocount is ${repoCount} `);

const gameName = new String('May-ank')

// Strings are objects key value pair not array

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('k'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-2,7) // 7-2 = 5 so it will print (5,7)
new String('May-ank') 
// creates a String object, not a primitive string.
// (But for .slice(), it behaves the same way.)

// slice(start, end) extracts characters from index start (inclusive) to index end (exclusive).

// when you give a negative start index (-8), it means:
// → start from string.length + (-8)
// → here, length = 7, so 7 - 8 = -1, which is less than 0 → treated as 0.

// so effectively you’re doing .slice(0, 4)
// → that gives "May-".
console.log(anotherString)


const newString1 = "   hitesh   "
console.log(newString1) ;
console.log(newString1.trim()) // trim removes starting or ending spaces there is trimStart() and trimEnd() also

const url = "https://mayank.com/mayank%20dhingra"

console.log(url.replace('%20','-'))
console.log(url.includes('mayank')) // returns true or false
console.log(url.split('/')) // splits based on given pattern and returns array 

const password = "admin-12-3-45"
console.log(password.split('-')) // splits based on - and returns array

