let a = 4;
let b = 3;
console.log(a==b);
// console.log(a = = b); // wont wor/k gap in between ==
console.log( a == b); // will work
console.log(a!=b)

console.log((a<b));
console.log((b<a));
console.log(a>b);
console.log(b<a);

let k =8
let j ="8"

// == it actually converts k and j into certain data type and then checks the value ,not the data type
console.log(k==j)
// === it checks whether the data type is same or not and then it checks the value of it 
console.log(k===j)



const day = 8
if(day==1){
    console.log("monday");
}
else if(day==2){
    console.log("tuesday");
}
else if(day==3){
    console.log("wednesday");
}
else if(day==4){
    console.log("thursday");
}
else if(day==5){
    console.log("friday");
}
// if none of the condition works else will work
else {
    console.log("chill day");
}

const dday = 2

// swich case is faster than if else 
// if break not given in switch case , then as soon as it finds any case true it will execute return or
//  print all the case statements ,which are there after the true case 
//break statement
// as soon as the conditions comes true it comes out of the switch statment 
// without break statements

switch (dday){
    case 1:
        console.log("monday");
    
        case 1:
            console.log("monday");
        
        case 2:
            console.log("tuesday");
        
        case 3:
            console.log("wednesday");
        
        case 4:
            console.log("thursday");
        
        case 5:
            console.log("friday");
        
        default:
            console.log("chill day");                                                                                                                    
}
// output:-
// tuesday
// wednesday
// thursday
// friday
// chill day

// with break statements
switch (dday*2){
    case 1:
        console.log("monday");
        break;
        case 1:
            console.log("monday");
            break;
        case 2:
            console.log("tuesday");
            break;
        case 3:
            console.log("wednesday");
            break;
        case 4:
            console.log("thursday");
            break;
        case 5:
            console.log("friday");
        default:
            console.log("chill day"); 
            break;                                                                                                                   
}
// output :- thursday

const age = 39
const isSkilled = false
if(age>19 && age<40 || isSkilled){
    console.log("you can drive")
}
else{
    console.log("you cant drive")
}
