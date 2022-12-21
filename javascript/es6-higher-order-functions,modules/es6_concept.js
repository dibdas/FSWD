
// default parameters

function greet(name=`lolo`){
    console.log(`hello ${name}`);
}
greet()
greet(`amit`)

function sum(x,y=8){
    console.log((x+y));
}
sum(5)
sum(7,9)

// spread
 function greet(...args){
    console.log(`hello ${args}`);
    console.log(args[2]);
 }
 greet("amit",'sharma','lolo','anuj',null,undefined,12,NaN)
 greet(["amit",'sharma','lolo','anuj',null,undefined,12,NaN])

 const a=[4,6,7,8,2]
 const b =[3,5,...a,8,0,1]
 const c = [a,7,8,2]
 console.log(c);  // [Array(5), 7, 8, 2]
 console.log(b);

// object are never sorted , array is sorted
 const animal={
    name:`simba`,
    age:23
 }
 
 const fullInfo={
    ...animal,
    address:`pahaad`,
    legs:4
 }
 console.log(fullInfo);