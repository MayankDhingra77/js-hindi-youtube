// date represent single moment and is calculated from jan 1 , 1970 
// temporal 
let myDate = new Date() 
console.log(myDate.toString()) ;
console.log(myDate.toDateString()) ;
console.log(myDate.toLocaleString()) ;
console.log(typeof myDate)
// Date is a object 

let myCreatedDate = new Date(2023 , 0 , 23)
// in js months starts with 0 
console.log(myCreatedDate.toDateString()) ;
let DateWithTime = new Date(2023 , 0 , 23, 5 , 3)
console.log(DateWithTime.toLocaleString())

// agar hum chhte hain ki mm / dd / y aaye to
let myDDdate = new Date("2023-01-14") 
console.log(myDDdate.toLocaleString())

// agar humme check karna ho ki kisne phle vote kiya hai 
let myTimeStamp = Date.now()
console.log(myTimeStamp) // ye jan 1 , 1970 se aabhi tak ki date ko millisecond me convert kar dega
console.log(myDDdate.getTime()) ; // ye vhi date ko millisecond me dedega jan 1 , 1970 se aab tak

// to convert date.now() in seconds
console.log(Math.floor(Date.now()/1000)) ;


let newDate = new Date()
console.log(newDate.getMonth() + 1)

newDate.toLocaleString('default',{
    weekday: "long" ,
})