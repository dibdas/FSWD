export const addition =(a,b)=>{
    return a+b
}
export const substraction =(a,b)=>{
    return a-b
}

// export const multiply =(a,b)=>{
//     return a*b
// }

function multiply(a,b){
    return a*b
}
// function should always be used inside export default , not const or let
// there should be only one default statement inside one file  
export default multiply

