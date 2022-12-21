// if a function return promises then it is an asynchronous function 
// await does noyt have any relationship with timeout
// await only works with promises

// async function getCheese(){
    // or
function getCheese(){
    return new Promise((resolve, reject) => {
        // using setTime out to make feel of the api 
        setTimeout(()=>{
            resolve(`cheese 🍕`)
        },2000)
    })
}

// async function makeDough(cheese){
    // or
function makeDough(cheese){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`${cheese} dough 🥟`)

        },2000)
    })
}

// async function makePizza(dough){
    // or
function makePizza(dough){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`${dough} pizza 🍕`)

        },2000)
    })
}
// if a function return promises then it is an asynchronous function 
// with async and await  making the code from asynchronous to synchronous 

// if you need to await a function call it has to be call inside async function 
async function orderPizza(){
    // in order to handle th reject
    try{
        // as long as getCheese function is not getting resolved or rejected , it wont go to the next line 
        // await is basically waiting for the promise
        // as soon as promise get resolved or rejected, it moves to next line 
        const cheese = await getCheese() // its await because getCheese is async function 
 // its await because getCheese is async function 
        console.log(`now we have ${cheese}`);
        // passing cheese 
        // as long as makeDough function is not getting resolved or rejected, it wont move  
        const dough = await makeDough(cheese)
        console.log(`now we have ${dough}`);
        const pizza  =  await makePizza(dough)
        console.log(`now we have ${pizza}`);

        return pizza
    }catch(err){
        console.log(err);
    }

  

}
orderPizza()
    .then((pizza)=>console.log(`${pizza}`))