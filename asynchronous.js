console.log("first");
//setTimeout(() => {
  //  console.log("Reading...");
//}, 3000);  //async code or //non-blocking statement

//for(let i=1; i<100000000; i++)   //sync or //blocking statement

let file = null;

function readFileFromDb(cb) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
      resolve("File1.cpp");
     //reject("Network Error");
    
    },3000); 
});
}
 
file = readFileFromDb();
let a = setInterval(() => {
    console.log(file);
}, 1000);

setInterval(() => {
    clearInterval(a);

}, 10000);


console.log("second");
console.log("third");