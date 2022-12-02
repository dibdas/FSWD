const box = document.getElementById("box")
console.log(box); // null before using defer keyword
const container =  document.getElementById("container")
console.log(container);

let count=0

const message=(event)=>{
    console.log("click",count+=1 );
    console.log(event);
    coordinates.innerHTML=`${event.offsetX} ${event.offsetY}`
    box.style.left = `${event.offsetX}px`
    box.style.top = `${event.offsetY}px`


}
const coordinates = document.createElement("p")
document.body.append(coordinates)

// listening to the events
// calling the function, before click event occurs function has already been executed,
// and it wont work when you click on it..
// box.addEventListener("click",message())
// we are passing the function in the event listner , not calling it 
// when event will be trigger message function will called automatically
//  box.addEventListener("click",message)

//  box.addEventListener("mousemove",message)
// container.addEventListener("mousemove",message)

const onPageScroll=(event)=>{
    console.log(event);

}
document.addEventListener("scroll",onPageScroll)



const grandparent = document.getElementById("grand-parent")
const parent_new = document.getElementById("parent-new")
const child = document.getElementById("child")

// ()=>{} is a anonymous function {} is the body of the function

// bubbling up, thats why child clicked parent clcked and grand parent clicked
// bubbling is due to the DOM tree
// passing anonymous function
child.addEventListener("click",()=>{
    console.log("child clicked");
    // child.classList.add("round")
    child.classList.toggle("round")

})

// passing a function without giving it a name 
//  only grand parent clicked,as not parent is there above the grand parent
grandparent.addEventListener("click",()=>{
    console.log("grandparent clicked");
})
// bubbling up, thats why parent clicked and grandparent clicked

parent_new.addEventListener("click",()=>{
    console.log("parent clicked");
})


// bubbling up is child element event is triggered  , its immediate and other parent to highest DOM tree
//  will be able to access it, only if the eventlistener is same in the case of parents
 
