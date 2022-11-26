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