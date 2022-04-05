function getUsers(){
    return new Promise((resolve, reject) => {
        console.log("reading user");
        resolve(geteLocation);
      
    }); 
}

function geteLocation(){
     console.log("reading location");
    return new Promise((resolve, reject) => {
    //resolve(getStatus);
    reject(new Error("Something went wrong"));
    }); 
}


function getStatus(){
    return new Promise((resolve, reject) => {
        resolve("The status is Active");
    }); 
}

//getUsers()
//.then(fn => fn())
// .then(loc => loc())
// .then(status => console.log(status))
// .catch(er => console.log(er.message));

//async and await function
async function getDetails(){
    try{
         let result1 = await getUsers();
let result2 = await result1();
let result3 = await result2();
console.log(result3);
    } catch(error){
        console.log(error);
    }

}