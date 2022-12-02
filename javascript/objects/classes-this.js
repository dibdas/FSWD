// this keyword cant be used inside the arrow function
// need to use the this keyword to access the porperties of the current object 

const student={
    name:"anuj",
    marks:56,
    locat:"kolkata",
    talk: function(){
        // need to use the this keyword to access the porperties of the current object 
         //console.log(this.name); //anuj
         //console.log(marks); // classes-this.js:6 Uncaught ReferenceError: marks is not defined
         console.log(this.marks);
         //console.log(locat); // Uncaught ReferenceError: locat is not defined
         //console.log(`my marks are ${marks}`);// Uncaught ReferenceError: marks is not defined
        console.log(`my name is ${this.name} and my marks are ${this.marks}`)
        console.log(`location is ${this.locat}`);
    }

}
student.talk()

// this keyword cant be used inside the arrow function
// parent class of the Vechile class is Oobject
// classes are the modified version functions 
// prototype declares parent of the class
class Vechile {
    // constructor is also a function, which returns object
    constructor(wheels,model){
        // behind the scenes of the constructor
        // this is the current object i.e vechile, models and weels objects variables which are being 
        // initialized  new keyword
        // constructor is being used for initialization
        // const this={}, 
        // return this 
        // this.wheels =4
        // this.model="XUV"
        this.weels= wheels
        this.model= model
    }
    start(){
        console.log(`this is start ${this.weels + this.model}`);
    }
}

// scooter class inherits the properties and the functions of Vechile class
class Scooter extends Vechile{



}

// parent class of the Vechile class is Oobject
// as soon as new Vechile is written first the constructor is being called
// have to use new keyword which creating class and calling the constructor
// class contructor cant be invoked i.e cant be called without using the new keyword
const vechile1 = new Vechile(4,"XUV")
const vechile2 = new Vechile(6,"sedan")
console.log(vechile1);
console.log(typeof vechile1,typeof vechile2);
console.log(typeof Vechile);
vechile1.start()

console.log(vechile2);

let count,m =0
console.log(m++)//0 m is 1 but it will show 0 as it is increased inside the console log
m++;//1 
console.log(m); // m is 1


// function greet(){
//     count++
//     console.log(`reeting, ${count}`);
// }
// setTimeout(()=>{
//     greet()
// },5000)



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


    // JSON
    // JSON is javascript Object Notation , javscript can be created in any other languages

    