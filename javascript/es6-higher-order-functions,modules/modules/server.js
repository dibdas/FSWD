// import {addition,substraction} from './utility.js';
// renaming the imported function
import { addition as add, substraction as substract } from "./utility.js"
import multiply from "./utility.js"

// we can import default function with any name , example random_name , therefore random_name 
// will become the multiply function as it is only export default function
import random_name from './utility.js'

const a =9
const b = 7
// const result = addition(a,b)
const result = add(a,b)
// const resultsubstract = substraction(a,b)
const resultsubstract = substract(a,b)
console.log(result, resultsubstract);
// const multiplication = multiply(a,b)
// random_name will go to the multiply function only as it is export default function 
const multiplication = random_name(a,b)
console.log(multiplication);