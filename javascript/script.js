var age ="30" // declaration and initialization
console.log(age)

// let paw ; declaration
// paw=98 initialzation

// important
// variables vcant ve redeclared with different identifier
let n=90
undefined
let n =87
undefined
n
87
var n = 80
Uncaught SyntaxError: Identifier 'n' has already been declared

var t=8
undefined
let t="hj"
Uncaught SyntaxError: Identifier 't' has already been declared
var t="jk"
undefined
t
'jk'


// in javascript true is 1, false is 0
// convert true to number gives the value 1
// Number(true) is 1
// convert false to number gives the value 0
// Number(false) is 0 

//  when Number is converted to Boolean it  becomes or returns true

let fullname="sharm snack"
// a container named fullname storing the value sharma snack

// javascript is case sensitive

// javscript is not a type language

// type log then move down to second option select it press enter console.log will come up

console.log();

let ab // uninitialized variables are called undefined
console.log(ab); // undefined

let bn=" "
console.log(bn); // " " empty string is not undefined

nj
var nj
console.log(nj); // undefined

//  jk
//  console.log(jk) // Uncaught ReferenceError: jk is not defined

// mo
let mo
console.log(mo); //script.js:28 Uncaught ReferenceError: Cannot access 'mo' before initialization

// type conversion

let x= 89
undefined
x
89
x="7890"
'7890'
typeof x
'string'
x= 98
98
typeof x
'number'
x= Number(x)
6534
typeof x
'number'

var xty = 987
const  ytr = Number(xty)
console.log(typeof ytr);



let cty = 90
undefined
cty="abc"
'abc'
typeof cty
'string'
cty = "5675"
'5675'
cty= Number(cty)
5675
typeof cty
'number'
cty="abc"
'abc'
typeof cty
'string'
cty= Number(cty)
NaN
typeof cty
'number'
cty
NaN

const vb = String(cty)
undefined
vb
'NaN'
typeof vb
'string'

let a =896
undefined
a
896
typeof a
'number'
a = String(a)
'896'
typeof a
'string'


let isClicked = true
undefined
const pl = Number(isClicked)
undefined
pl
1


let b = "123"
undefined
Boolean(b)
true
b
'123'

Number(123)
123
Boolean(123)
true
Boolean("123")
true
Boolean(undefined)
false
Boolean(NaN)
false
Boolean("abc")
true

Boolean(abc)
// Uncaught ReferenceError: abc is not defined

let f = 45
undefined
let bool =Boolean(f)
undefined
bool
true
Boolean("")
false
Boolean(" ")
true
Boolean(null)
false
Boolean(0)
false
Boolean(undefined)
false
Boolean(NaN)
false

Number("")
0
Number(" ")
0
Number(null)
0
Number(false)
0
Number(true)
1
Number("abc")
NaN
Number(undefined)
NaN
Number(NaN)
NaN
Number("NaN")
NaN
Number("-")
NaN
Number("&")
NaN
Number($)
NaN
Number(*)
VM3862:1 Uncaught SyntaxError: Unexpected token '*'
Number(%)
VM3875:1 Uncaught SyntaxError: Unexpected token '%'
Number("%")
NaN



const g = 4
undefined
const h = 2
undefined
h**g
16
g**h
16