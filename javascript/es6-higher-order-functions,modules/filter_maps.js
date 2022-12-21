const arr =[11,22,34,45,56,67,78,89,98,undefined]

function isEven(num){
    return num%2==0
}
function isOdd(numbers){
    return numbers%2!=0
}

[11,21,31,41,51,61,71,81,91].filter((arr,element,index)=>{
    // inside the filter function it is working exactly what it is doing in the filterNumbers in 
    // higher_order_function.js.., it making a new Array called b=[], making a for loop with Array 
    // i.e is passed , then using the condition it filterNumbers, and passing it into the new array 
    console.log(element,index,arr);
    return true
})
// filter method return the boolean value , if returns if the condition or the condition is true 
const arr1 = arr.filter(isEven)
console.log(arr1);
const arr2 = arr.filter(isOdd)
console.log(arr2);

const arr3= arr.filter((num)=> num%2==0)
console.log(arr3);
const arr4= arr.filter((num)=> num%2!=0)
console.log(arr4);

//map
// map return every element in the array
function square(num){
    return num*num
}
const b = arr.map(square)
console.log(b);


//find
// find returns the first value that matches the  condition where the conditio is true
 const foundEven = arr.find((num)=>num%3==0)
 const foundOdd = arr.find((num)=>num%2!=0)
 console.log(foundEven);
 console.log(foundOdd); 



 const students=[
    {
        name:"anuj",
        marks:72
    },
    {
        name:"sharma",
        marks:22
    },
    {
        name:"amit",
        marks:34
    },
    {
        name:"lop",
        marks:82
    },
    {
        name:"ankita",
        marks:62
    }
 ]

 const foundStudentmore50 = students.find((element)=>element.marks<50)
 console.log(foundStudentmore50);
 const foundStudentsmore50 = students.filter((element)=> element.marks>50)
 console.log(foundStudentsmore50);


//  using map
const grades = students.map((element)=>element.marks>50?element.ispassed=`pass`:
element.ispassed=`fail`)
console.log(grades);

const gradesInDetails = students.map((element)=>{
    if(element.marks>50)
        element.ispassed = `pass`
    else element.ispassed = `fails`
    return element

})

console.log(gradesInDetails);

// default parameter value

