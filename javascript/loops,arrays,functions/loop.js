// ; ; inside the for loop divides the for loop in three sessions
// semi colon divides the for loop into three sections
// let a= 0 initial expression
// a<10 conditional expression

// how for loop works-
// when you enters the for loop first it initialize the expression , and it runs only once.,
// after that then it checks the conditional expression , if its true you enters into the loop
// execute the console log statment and when the loop ends it enters into the update expression, value 
// get increased or decreased , after that it enters into the conditional expression, it will continue 
// till condition is false 

for(let a=0 ;
    a<10;
    a++
    )
    {
    console.log("hello", a)
  
}

// all are same
// count++
// count= count+1
// count +=1


// while loop
let n = 5;
// its an infinite loop
// while(n<10){
//     console.log("hello world");
// }
// conditional loop
while(n<10){
    console.log("hello world",n);
    n++;
}
console.log(n);
let g=0
while(g<5){
    g++;
    console.log("hello world",g);
   
}

let k=0
do{
    console.log("hello",k)
    k++;
}while(k<6)


// in do while loop it will run once ,even if the condition does not matches
let l=9
do{
    console.log("hello world", l)
    l++

}while(l<6)

for(let i=0;i<=6;i++){
    console.log("hello",i);
}


