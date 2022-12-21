// A variable is undefined when it's not assigned any value after being declared. 
// Null refers to a value that is either empty or doesn't exist. null means no value. 

// [] is array literal
let words = ["hello","hi",345,true,null,undefined]

words[8]="hari"
console.log(words);
console.log(words[5]);
console.log(words[4])

const newWords = new Array(5,9,1,4,"hi",6)
console.log(newWords)
// add element at the rear
newWords.push("anuj")
console.log(newWords);
// update the array values
newWords[1] ="manoj"
console.log(newWords)
// remove th element from rear
newWords.pop()
console.log(newWords);
newWords.push(null)
newWords.push(undefined)

for(let i =0;i<newWords.length;i++){
    console.log("hello ",newWords[i]);
}

let daily_stuff = new Array("eat", "sleep","walk","code ","repeat");

for(let name in daily_stuff){
    console.log("hello ",name,daily_stuff[name]);
}


for(let name of daily_stuff){
    console.log("hello ",name);
}

// sort modifies the arrray 
daily_stuff.sort()
console.log(daily_stuff);

console.log(daily_stuff.includes("kol"));

const isPresent = daily_stuff.includes("sleep")
console.log(isPresent);

const index = daily_stuff.indexOf("sleep")
console.log(index);
const chckIndex = daily_stuff.indexOf("moi")

console.log((chckIndex)); // -1 mean item not being found so it -1

const names = ["harish","anuj", "pankaj","suresh","anjali","Peter", "alex", "rony"]
// splice(index number,no. of numbers want to delete)
// deleting anuj and pankaj
names.splice(1,2)

console.log((names));
// deleting alex and rony
names.splice(names.length-2,2)
console.log((names));

// deleting suresh and najali , inserting ghansham , amit,devi
names.splice(1,2,"ghansham","amit","devi")
console.log(names);
// inserting mohan between  ghansham and amit
// while inserting a vakue in between two values without deleting any values
// splice(index of that place where you want to insert,0,value )
names.splice(2,0,"mohan")
console.log(names)

const arr_1 =[97,21,43,6,4]
arr_1.sort()
// sort(): sorts the elements alphabetically in strings and in ascending order
// sort() works like dictionary , so 2 comes first , then 4, then 6 ,and  then 9 so in two or three 
// digit number sort always takes the first digit OR the first letter of individual elements and 
// sort it like dictionary
// sort convert it to string and then it sort like alphabetically not like interger
console.log(arr_1);

// modification of const variable is not allowed
// const g = 8
// g="hju" // not allowed
// console.log(g);

// modification of array is possible in const array variable
const arr = [8,7,4,5]
arr[2] = 45 // allowed
console.log(arr);
arr.pop()
console.log(arr);
arr.push("lop","kol")
arr.splice(0,0,"amit")
console.log(arr);
arr.splice(1,3)
console.log(arr);

arr.splice(0,3,76,89,143,76,"amit")

// arr=[90] // redecalartion is not possible in const array variable
console.log(arr);

let arr1=[9,6,4]
console.log(typeof arr1); // objects
arr1=7
console.log(typeof arr1);





let arr3 = [4,7,"ki","potty",9,5,0]
// arr3.forEach((element,index,arr)=>{ three things can be taken
arr3.forEach((element)=>{
    console.log("printing", element);

})
// passing the function as an argument to another function

let myfunction =function(element,index){
    console.log("printing and index", element , index);
}

function newfunction(element,index){
    console.log("printing and index newfunction", element , index);
}
const arrowfunction=(element,index)=>{
    console.log("printing and index arrowfunction", element , index);

}


arr3.forEach(arrowfunction)
arr3.forEach(newfunction)
arr3.forEach(myfunction)


// passing these block inside the forEach function
// (element,index){
//     console.log("printing and index", element , index);
// }


// sorting the array like numbers
let arr4=[6,76,4,8,54,23]
arr4.sort((firstnumber,secondnumber)=>{
    //ascending order
    // if(firstnumber<secondnumber) return -1 // i.e <0 firstnumber will come before secondnumber
    // if(secondnumber<firstnumber) return 1 //  i.e >0 firstnumber will come after secondnumber so swap
    // return 0

    //descending order
    // if(firstnumber<secondnumber) return 1 firstnumber will come after  secondnumber 
    // if(secondnumber<firstnumber) return -1 secondnumber will come after firstnumber so swap
    // return 0

    // one line statement or the shortcut for ascending and descending order
    //return firstnumber-secondnumber // ascending order if < 0 firstnumber will come before secondnumber, if > 0 firstnumber will come after secondnumber
     // return secondnumber-firstnumber // descending order if <0 firstnumber will come before secondnumber

     return -(firstnumber -secondnumber) //descending order another way -ve value so swaping 

    
})
// sorting happens majorly inside the return statement
// return type is also a number , if return type is +ve then firstnumber is bigger,so firstnumber will
// come after secondnumber, if -ve then secondnumber is bigger ,then secondnumber will come before firstnumber
// and  if 0 then both of them are equal
console.log(arr4);
//  asecending order swaps when the retur value is > 0
//  descending order swaps when the return value is < 0 

const numbers = [23,76,12,3,5,7,9,21,34,65,98,90]
numbers.sort(comparefunction)
function comparefunction(a,b){
    // in ascending order
    // if <0 a wiil come first
    // if >0 b will come second
    //  if 0 nothing to be changed
    // in descending order
    // if <0 b wiil come first
    // if >0 a will come second
    //  if 0 nothing to be changed
    // return a-b // ascending order
    // return b-a  // descending order
    return -(a-b) // descending order another way 
    
}
console.log(numbers);

const products =[
    {
    name:"laptop",
    price:3000
},
{
    name:"desktop",
    price:2700
},
{
    name:"tv",
    price:2000
},
{
    name:"mouse",
    price:700
},
{
    name:"vcr",
    price:1850
}
]

products.sort((p,q)=>{
    // return p.price -q.price // ascending price
    // return q.price-p.price //descending order
    return -(p.price -q.price) // descending order in another way -ve value so swapping

})
console.log(products);

