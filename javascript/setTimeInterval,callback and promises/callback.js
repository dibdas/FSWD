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
    // console.log(callback);
     // calling the cheese function
    getCheese((cheese)=>{
         // getting the value cheese from the above callback and passing it as an argument
        //  console.log(cheese);
        makeDough(cheese,(dough)=>{
             // getting the value dough from the above callback and passing it as an argument
            bakePizza(dough,(pizza)=>{
                callback(pizza)
            })
        })
    })

}

function getCheese(next){
    console.log(next);
    setTimeout(()=>{
        const cheese =`🍕`
        console.log(`sending the ${cheese}`);
        next(cheese)
    },2000)
}

function makeDough(cheese,next){
    console.log(cheese);
    console.log(next);
    setTimeout(()=>{
        const dough =`🥟`
        console.log(`sending the ${dough} and ${cheese}`);
        next(dough)
    },2000)
}

function bakePizza(dough,next){
    console.log(next)
    console.log(dough);;
    setTimeout(()=>{
        const pizza_dough = `🍕`+ dough
        console.log(`baking pizza with  ${pizza_dough}`);
        next(pizza_dough)
    },2000)

}

function callbackPizzaNotificationOnSuccess(pizza){
        console.log(` notification  ${pizza}`);
    }
orderPizza(callbackPizzaNotificationOnSuccess)

console.log(`visit nani`);
console.log(`rest`);