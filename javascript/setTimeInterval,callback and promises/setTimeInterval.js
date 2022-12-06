const a =23
const b =12
const c =a+b
// how synchronous JS works

// console.log("ordering burger");

// for(let i=0;i<500000000;i++){
//     let n= i*567
// }

// console.log("burger eaten");

function greet(name){
    console.log(`hello world I am greet ${name}`);
}
// greet()
console.log(`before greet`);
// here we are passing the function , not calling it thats why its working after 5seconds,i.e ansychronously

// sync function 
// here function is being called ,not passed ,hence  it works synchrounously, it wont delay for 6 seconds, and it will be called immediately
// setTimeout(greet('amit'),6000)

// async function
//setTimeout(greet,5000) // executing greet function after 5seconds
const timeOutV =setTimeout(greet,6000,`vivek`) // executing greet function after 5seconds , calling and passing the value
console.log(`this is called after greet`);
// same as the async settie out functio in the above
const timeOutM = setTimeout(()=>{
    greet(`manoj`)

},10000)

const timeOutcheckingId = setTimeout(()=>{
    console.log(`timeout checking out Id`)
},5000)

// to stop Timeout we use clearTimeout
clearTimeout(timeOutV)
// clearTimeout(timeOutM)
clearTimeout(timeOutcheckingId)

// passing object inside setTimeout
function info(obj){
    console.log(`object legs ${obj.legs}`);
}
setTimeout(()=>{
    info({legs:5})
},3000)



// setInterval -> calls the function repeatedly, couple of times 
let count=0
function increaseCount(){
    count++;
    const date = new Date().toTimeString()
    console.log(count);
    console.log(date);
    if(count==6){clearInterval(setIntervalid)}
}
// passing the function , not calling it 
const setIntervalid = setInterval(increaseCount,2000)
// setInterval(()=>{
//     increaseCount()
// },3000)