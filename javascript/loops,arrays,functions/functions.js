function greeting(){
    console.log("hi");
    console.log("namasta");
    console.log("wassup");
}
greeting();
greeting()
// passing parameter

function greeting(...name){
    console.log("hi "+ name);
    console.log("namasta "+ name);
    console.log("wassup "+name);
}
greeting("anuj")("amit")
// greeting("amit")