// orderPizza is making the Promise

function orderPizza(){
    // setTimeout(()=>{
    //     const pizza = `🍕`
    // },2000)

    // not return the bakePizza, but giving the promise of returning the promise of giving you the pizza 
    // promise is a contructor, it an anonymous function where two callbacks are present which are resolve and reject
    // resolve and reject are two call back
    // return new Promise(function (resolve, reject){
    return new Promise(function (res, rej){
        const isAvailable = true

        setTimeout(()=>{
            const pizza = `🍕`
            // passing the data , with the help of resolve
            // resolve(pizza)
            // res(pizza)
            // isAvailable?res(pizza):rej(pizza)
            !isAvailable?res(pizza):rej(`we dont have pizza`)
        },2000)

        
    })
    // return new Promise((resolve, reject) => {
        
    // })
}
// orderPizza is making the Promise

const pizzaPromise = orderPizza()
pizzaPromise
    // if fullfilled
    .then((pizza,error)=>{
        console.log(`my pizza ${pizza}`);
        console.log(error);
    })
    // if rejected
    .catch((error)=>{
        console.log(`error occured ${error}`)
    })
// console.log(pizzaPromise);



// select seats
// enter name
// payments

bookRailwayTicket()
function bookRailwayTicket(){
    const seat =`A6`,
    name=`Mark`,payments =670
    selectSeats(seat) // it will return a promise object
    // when selectSeats get fulfilled it calls then
    // name and seat all will be pass into enterdetails, the data will be pass into enterdetails
        // .then(enterDetails) 
        .then((seat)=>{ // we got seat from selectSeat promise
            enterDetails(name,seat)  // we got seat from selectSeat promise
        })
        // when the enterDetails is getting fullfilled it calls then ,
        // and can use that data to pass into next function
        // below will resolve the promise of enterdetails
        .then((details)=>{ // it will resolve the promise of enterdetails
            submitPayments(name,seat,payments)
        }) 

}
function selectSeats(seat){
    return new Promise((resolve, reject) => {
        // use set timeout to find seat as it takes time
        setTimeout(()=>{
            console.log(`seat confirmed ${seat}`);
            // in resolve () is important i.e parathesis is important 
            // otherwise it will give error in some cases
            resolve (`confirmed ${seat}`) // it will be passed into enterdeatils 
        },3000)
    })
}

function enterDetails(name,seat){
    console.log(seat);
    return new Promise((resolve, reject) => {
        // it does take time to bind seat with name
        setTimeout(()=>{
            console.log(`name binded ${name} with ${seat}`);
            resolve `confirmed ${seat} ${name}`
        },3000)
        
    })
}

function submitPayments(name,seat,payments){
    // console.log(seat);
    return new Promise((resolve, reject) => {
        // it does take time to bind seat with name
        setTimeout(()=>{
            console.log(`payments confirmed ${name} with ${payments} and ${seat}`);
            resolve `confirmed ${seat} ${name} ${payments}`
        },3000)
        
    })
}

