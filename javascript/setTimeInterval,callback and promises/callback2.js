function orderPizza(callback){
    // as soons as the order came bake the pizza first
    
    // setTimeout(()=>{
    //     const pizza ='pizza in order pizza'
    //     // callback(pizza)
    // },2000)
   
    // bakePizza(pizzacall)
    // // callback(pizzacall) will not work
    // function pizzacall(pizza){
    //     callback(pizza)
    // }


    
    //  callback(pizzacall) will not work
    bakePizza(function(pizza){
        callback(pizza)
    })

    // shortcut of the above two 
    // bakePizza((pizza)=>{
    //     callback(pizza)
    // })

    
}
function bakePizza(callbackbake){
    // setTimeout(()=>{
    //     const pizza =`in baked the  pizza`
    // console.log(`baking the pizza`);
    // callbackbake(pizza)

    // },2000)
    // const pizza =`in bake pizza`
    // console.log(`baked the pizza`);
    // callbackbake(pizza)
    makeDough((dough)=>{
        setTimeout(()=>{
            const pizza =`${dough}+pizza`
            console.log(`baking the pizza`);
            callbackbake(pizza)
        },2000)
    })

}
function makeDough(callback){
    setTimeout(()=>{
        const dough =`the dough`
        console.log(`making the ${dough}`);
        callback(dough)
    },2000)
}
function noifyMeOnSuccess(pizza){
    console.log(`here is the notication ${pizza}`);

}
orderPizza(noifyMeOnSuccess)