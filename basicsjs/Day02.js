//  Today we will learn about code readability and data types

// console.log(3+3);  //good practice

// console.log(3
//     +3);
    // wrong practice

    // both will give o/p 


// data types 

let name = "shubham" // string
let age = 18 //numeric
let isLoggedIn = true //boolean

        //undefined
        //null
        //and may others

     console.table([name,age,isLoggedIn])   



     console.log(typeof age);  //typeof is used for getting the information of data types

 
     
// Datatype conversion

let score = "33abc"

console.log(typeof score);


let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" = 33 deta h after conversion
// "33abc" = NaN deta h not a number
// true = 1 false = 0


let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2**3); // 2 raise to power 3

// // concatenation using operations

console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "3");

// // === it will be used to check comparison strictly and it will check data types too

// console.log("2" === 2);
// console.log("2" == 2);

//let Symbol = "123"
//console.log(Symbol);

// these are objects and in python we call it as dictionary & it is a non primitive data type array,objects,functions


//************************ */

let myObj = 
{
    name : "shubham",
    age : "18"
}

console.log(myObj);

// myfunction

// const myfunction = function(){
//     console.log("hii shubham ");
// }

