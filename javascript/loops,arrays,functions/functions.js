function greeting(){
    console.log("hi");
    console.log("namasta");
    console.log("wassup");
}
const value = greeting();
// value is undefined when the function returns nothing
console.log(value); // undefned
// greeting()
// passing parameter

function greeting(...name){
    console.log("hi "+ name);
    console.log("namasta "+ name);
    console.log("wassup "+name);
}
// greeting("anuj")("amit")
// greeting("amit")

// link of the function is done here ,it is that we are calling the function, please link the
// function where it is located
let result = addition(2,4)
console.log(`result is `,result);
//working this as a function block ,function is being searched in the memory,a memory is 
// allocated inside the memory given a name to it 
function addition(a,b){
    // console.log(a+b);
    return a+b
}
// addition method is called before being declared , where compiling takes places first, certain space is
// allocated to the memory or being defined in the memory and then linking being done
// so first defining the function is done  then linking being done
// when the function example addition function is being called or invoked , then we try to find out
// where the specified function is declared and then we link it and then we call the function


// functions can also be treated as expression
// reference error, we are trying to access the variable before creating it , i.e initializing it
// we are getting the ReferenceError because we are trying to access the variable newaddition before
// initializing it ,variable is newaddition 
// by doing console.log(newaddition(7,8)) we are actually trying to access the variable newaddition
// console.log(newaddition(7,8))  
// newaddition(7,8) it is actually can be taken as accessing the variable and the variable is newaddition

// newaddition is variable basically 
// const newaddition = function(a,b){
//     return a+b
// }

// console.log(newaddition(7,8)) // no error as we are trying accessing the after decalring

// ths is anonymous function, i.e function with no name is called anonymous
// function(a,b){
//     return a+b
// }


let newaddition = function(a,b){
    return a+b
}


console.log(typeof newaddition) // function

newaddition = 76
console.log(typeof newaddition);

console.log(newaddition(7,8)) // functions.js:60 Uncaught TypeError: newaddition is not a function at functions.js:60:13


let anonymous = function(a,b){
    return(a+b)
}
// in arrow function, function keyword is not required , conerverting anonymouns function in arrow function

let arrowanonymous =(a,b)=>{
    return(a+b)
}



