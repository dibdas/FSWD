const b = [1,2,3,4,5,6,7,8,9]
// console.log(b);
const a=[]
function filterNumbers(conditionFunction){
    for(let i=0 ; i<b.length;i++){
        // if(b[i]%2==0){
            if(conditionFunction(b[i])){
            a.push(b[i])
        }

    }
    return a
}

function isEven(num){
    return num%2==0
}
function isOdd(numbers){
    return numbers%2!=0
}
// const evenNumbers = filterNumbers(isEven)
// const oddNumbers = filterNumbers(isOdd)
// console.log(evenNumbers);
// console.log(oddNumbers);

// ()=>{} is an anonymous function 
// const evenNumbers = filterNumbers(function(num){
//     return num%3==0

// })
// code below is the same code as above 
const evenNumbers = filterNumbers((num)=>{
    return num%3==0
})

console.log(evenNumbers)