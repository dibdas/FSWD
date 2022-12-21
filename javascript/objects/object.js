// created the object using the object literal
// {} is the object literal
// , seperate the key value pair
const y={name:"anuj",isAlive:true,age:30,isHuman:true}
//accessing property

// object can be created without creating class

console.log(y.name);
console.log(y.age);
// [name] actually trying to find the value of name variable
console.log(y[name]); // cant acces like this
// 'name' passing a string value to access the property
console.log(y['name']);
console.log(y['age']);

// {} are called as object literals

const z ={
    name:"anuj",
    age:39,
    hobbies : ["walking","cyclig","swiming","eating","fishing"],
    food:{
        sunday:"pizza",
        tuesday:"burger",
        wedneday:{

        }
    }
}
console.log(z);

// adding properties key value pairs
z.isHuman =  true // modifying the z , not changing the typeof z
z.name="shivam" // modifying the z , not changing the typeof z
console.log(z);
console.log(typeof z);
// z=8 // this cannot be done because y is a constant and here changing the typeof z, so not done
// z="hello" // this cannot be done because y is a constant  changing the typeof z , so not done
console.log(z);
console.log(typeof z);
// accessing the proerty by (.) notation .key giv es the value


for(let key in z){
    // console.log(z.key); // undefined
    // console.log(z["key"]); // undefined
    console.log(z[key]); 
}

// the function is making the Object and returning
// function getVechile(){
function getVechile(type){
    // {} by object literal creating the object from the function
    // factory method for creating the objects
    // this is the function that returs an object, hence called factory function
    // in javascript any function can become factory function 
    return{
        // type:"car",
        // type:type,
        // when the name of key and value pair is same write once
        type,
        wheels:4
    }
}
// when getVechile is called the return object is kept at one location in the memory
// const my_vechile1 = getVechile()
const my_vechile1 = getVechile("car")
my_vechile1.wheels= 5 // modifying the object of one location i.e my_vechile1 will not affect the another location object i.e my_vechile2
// when getVechile is called the return object is kept at another location in the memory
const my_vechile2 = getVechile()
console.log(my_vechile1);
console.log(my_vechile2);
console.log(typeof my_vechile2); // object
console.log(typeof my_vechile1); // object
console.log(typeof getVechile); // function

// object destructuring
const myAge = y.age
const myHumn = y.isHuman
console.log(myAge, myHumn);
// destructuring and putting into new variable,
// its like getting into the object find the key and assin the value of that key to this variable
const {age:newAge,isHuman:newHumn} = y
// age and isHuman is there to match with the key, and thus copy the value to new variable
console.log(newAge, newHumn);
const r={name:"anuj",isAlive:true,age:30,isHuman:true}
// const{age,isHuman} = r //destruring and assingnin the value to the same variable as that of the key
//  console.log(age,isHuman); 

//  let {age:rAge,isHuman:rhumm} = r 
//  let {age,isHuman:rHumm} = r 
// age,rHumm variable stores in is different location of te memory
// here age is there to match the key as well as to 
 // age and isHuman is there to match with the key, and thus copy the value to new variable
//  console.log(age);
//   age=78

//  console.log(isHuman); // not defined
//  isHuman= false
//  console.log(isHuman);
// console.log(age, rAge, rhumm);
// console.log(age,rHumm,r.age);
//  console.log(r.age);

//  const t={name:"anuj",isAlive:true,age:60,isHuman:true}


// let {age:rAge,isHuman:tHumm} = t
//  age,isHuman,tHumm,rAge variable stores different location of te memory
 // age and isHuman is there to match with the key, and thus copy the value to new variable
 //console.log(age);// Uncaught ReferenceError: age is not defined

//   age=50
//  isHuman=false
//  console.log(age,isHuman,rAge,tHumm);
//  console.log(t.age,t.isHuman);

 const p={cost:90,isGoing:true,destiny:"cal"}
//  console.log(cost,destiny,isGoing); // Cannot access 'destiny' 'cost' before initialization
 let {destiny,isGoing,cost} = p
 
//  console.log(cost,destiny,isGoing);
cost=8
 isGoing=false
 console.log(cost,isGoing);

 const j ={locus:"kol",planet:"mars",satellite:"apollo"}

//  let {locus,planet:plan,satellite:sat} = j
 const {locus,planet:plan,satellite:sat} = j
//  if its locus plan sat vcannot be changed

// Uncaught ReferenceError: planet is not defined at object.js:126:20
// object.js:126 Uncaught ReferenceError: satellite is not defined at object.js:126:20
//  console.log(locus,planet, satellite)

 console.log(locus,plan,sat);
 planet="earth"
 satellite="isro"
//  plan="skyv"
 console.log();
 console.log(locus,plan,sat)
console.log(locus,planet,satellite);



const allo ={
    name:"amit",
    cost:"45",
    age:39,
    hobbies : ["walking","cyclig","swiming","eating","fishing"],
    food:{
        sunday:"pizza",
        tuesday:"burger",
        wedneday:{

        }
    },
    //declaring function like arrow
    // jooging: function(){
    //     console.log("I like jogging");
    // }
    // making jogging like arrow function
    jogging:()=>{
            console.log("I like jogging");
    }
}
allo.walk= function(){
    console.log("i am walking");
}
allo.walk
allo.walk()
allo.jogging()
console.log(allo);

// function destructuring
const {walk} = allo
console.log(walk)

// passing function inside another function

// function shouting(){
//     console.log("I am shouting");
// }

// function talking(shouting){
//     shouting()
//     console.log("I am talking");
//     // shouting()

// }
// talking(shouting)

// ()=>{} it is the shouting function

// passing the shouting function
talking(()=>{
    console.log("Im shoiting");
})
function talking(shouting){
    // shouting()
    console.log("i am talking");
    shouting()

}



