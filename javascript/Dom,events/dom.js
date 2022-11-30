

const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2")
console.log(box1);
console.log(box2);
const box6 = document.getElementById("box-6")
const box4 = document.getElementById("box-4")
const box5 = document.getElementById("box-5")

// getting all th elements  so getElements
const divs = document.getElementsByTagName("div") 
console.log(divs);
// total 8 divs , 7 small divs and 1 big div i.e container div
console.log(divs.length); // 8
console.log(divs[0]); // container div i.e divs[0]
console.log(divs[1]); // box-1 div
console.log(divs[4]); // box-4 div
const container =  document.getElementsByClassName('container')
console.log(container);

// querselectort is just like CSS Selector for is use # , for class use .
const box3 = document.querySelector("#box-3");
console.log(box3);
console.log(box3.classList);

// fetch all the box inside the container
// queryselectorall return the array
const boxMultiples = document.querySelectorAll(".container .box")
console.log(boxMultiples);
console.log(boxMultiples[0]);
console.log(boxMultiples[3]);

const divMultiples  = document.querySelectorAll(".container div")
console.log(divMultiples);
console.log(divMultiples[5]);
console.log(divMultiples[0]);

box4.innerHTML= `<h1>this is modification</h1>`
// box4.innerHTML = "<div><p>hello</p><div>"
box4.style.borderRadius="50%"
box4.style.backgroundColor="yellow"
box4.style.color="black"

const myImage = document.getElementById("my-image")
// myImage.src="https://via.placeholder.com/200";
myImage.alt="this is a dummy image"

// adding class dynamicaly 
// classList the property which provides all the classes
box5.classList.add('fancy') // more classes can be added to it 
console.log(box5.classList)

// multiple class can be added dynamically
// box5.classList.add("","")

// removing class dynamically
// box5.classList.remove("fancy")

for(let i=0;i<10;i++){
    const boxElement =  document.createElement("div")
    boxElement.classList.add("fancy","new-box")
    container[0].append(boxElement)
}



