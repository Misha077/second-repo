/* objects */
let person1 = {
    name: 'misha',
    address: ["#533", "#534"],
    age: 22,
    isVerified: true,
    friend: {name:"kush", email:"ishsbv@gsdv", age:"24"} //This is array
};

/* objects */
let car ={
    company: 'honda',
    weight: 300,
    includes: ["engine", "charger"]
};

/* for in loop */
// for(let key in person){
//     console.log(key, person[key]);
// }

let person2 = {
    name: 'sushil',
    address: ["#533", "#534"],
    age: 24,
    isVerified: true,
    friend: {name:"kush", email:"ishsbv@gsdv", age:"24"} //This is array
};

let person3 = {
    name: 'nidhi',
    address: ["#533", "#534"],
    age: 23,
    isVerified: true,
    friend: {name:"kush", email:"ishsbv@gsdv", age:"24"} //This is array
};

/* array of  objects */
let persons = [person1, person2, person3];

/* JSON representation */
let json = JSON.stringify(persons);

/* convert into objects again */
let jsonString = `[{"name":"misha","address":["#533","#534"],"age":22,"isVerified":true,"friend":{"name":"kush","email":"ishsbv@gsdv","age":"24"}},{"name":"sushil","address":["#533","#534"],"age":24,"isVerified":true,"friend":{"name":"kush","email":"ishsbv@gsdv","age":"24"}},{"name":"nidhi","address":["#533","#534"],"age":23,"isVerified":true,"friend":{"name":"kush","email":"ishsbv@gsdv","age":"24"}}]`;
let array = JSON.parse(jsonString);