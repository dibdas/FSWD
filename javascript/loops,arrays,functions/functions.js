function greeting(){
    console.log("hi");
    console.log("namasta");
    console.log("wassup");
}
const value = greeting();
console.log(value);
// greeting()
// passing parameter

function greeting(...name){
    console.log("hi "+ name);
    console.log("namasta "+ name);
    console.log("wassup "+name);
}
// greeting("anuj")("amit")
// greeting("amit")

let result = addition(2,4)
console.log(`result is `,result);
function addition(a,b){
    // console.log(a+b);
    return a+b
}
// addition method is called before being declared , where compiling takes places first, certain space is
// allocated to the memory or being defined in the memory and then linking being done
// so first defining the function is done  then linking being done
// when the function example addition function is being called or invoked , then we try to find out
// where the specified function is declared and then we link it and then we call the function