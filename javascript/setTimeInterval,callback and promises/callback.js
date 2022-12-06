// const orderPizza=(callback)=>{ // passing the function
//     setTimeout(()=>{
//         const pizza = `pizza callback`
//         callback(pizza)  // calling the function 
//         // return pizza
//         console.log(`after callback calling`);
//     },4000)
//     console.log(`after settime end of order pizza`);
// }
// console.log(`callbackPizzaNotificationOnSuccess`);
// function callbackPizzaNotificationOnSuccess(pizza){
//     console.log(`here is my notification for inside callback pizza ${pizza}`);
// }
// console.log(`after pizza notification before order Pizza`);

// orderPizza(callbackPizzaNotificationOnSuccess)

// console.log(`orderPizza calling`);
// console.log(`visit nani`);
// console.log(`rest`);


// const pizza = orderPizza()
// console.log(pizza);

// orderPizza((callbackpizza)=>{
//     console.log(`here is my notification for inside callback pizza ${callbackpizza}`);
// })



const orderPizza=(callback)=>{ // passing the function
    // setTimeout(()=>{
    //     const pizza = `pizza callback`
    //     callback(pizza)  // calling the function 
    //     // return pizza
    //     // console.log(`after callback calling`);
    // },4000)
    // console.log(`after settime end of order pizza`);
    getCheese((cheese)=>{
        makeDough(cheese,(dough)=>{
            bakePizza(dough,(pizza)=>{
                callback(pizza)
            })
        })
    })

}

function getCheese(next){
    setTimeout(()=>{
        const cheese =`getCheese`
        console.log(`send the ${cheese}`);
        next(cheese)
    },2000)
}

function makeDough(cheese,next){
    setTimeout(()=>{
        const dough =`making dough and  ${cheese}`
        console.log(`sending the ${dough}`);
        next(dough)
    },2000)
}

function bakePizza(dough,next){
    setTimeout(()=>{
        const pizza_dough =`baking dough and ${dough}`
        console.log(`bake pizza  ${dough}`);
        next(pizza_dough)
    },2000)

}

function callbackPizzaNotificationOnSuccess(pizza){
        console.log(` notification  ${pizza}`);
    }
orderPizza(callbackPizzaNotificationOnSuccess)

console.log(`visit nani`);
console.log(`rest`);