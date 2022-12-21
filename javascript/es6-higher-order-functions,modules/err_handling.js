// const x = 4 / ;
// using try and catch does not let the app crash
try{
    // const x = 4/ 
    console.log(`here is no error`);
    console.log(x);
    // error is in the above line , so it will directly go the catch block, without going to next line
    console.log(`checking this`);
}catch(e){
    console.log("error occured");
    console.log(e);
}finally{
    console.log(`this will always be executed `);

}
// console.log(x);
// if try being used , we must use catch or finally or both 