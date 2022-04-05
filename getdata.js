

let BASE_URL = "https://622c30a3087e0e041e053fb1.mockapi.io";

let http = axios.create({
    baseURL: BASE_URL,
    timeout:5000,
    headers:{
        "x-auth-token": "fnifsnsx",
    },
});
//create data
async function createUser(userData){
//     let response= await fetch(`${BASE_URL}/students`,{
//  method:"POST",
//  headers: {
//      "Content-Type": "application/json",
//  },
//  body: JSON.stringify(userData),
//     });
//     console.log(response.status);

let response = await http.post(`/students`);
console.log(response.status);
}

//update data
async function updateStudent(data, id){
    // let url = `${BASE_URL}/students/${id}`;
    // let config = {
    //     method: "PUT",
    //     headers: {"Content-Type":"application/json"},
    //     body: JSON.stringify(data),
    // };
    // let response = await fetch(url, config);
    // console.log(response.status);

    let response = await http.put(`/students/${id}`, data);
    console.log(response.status);
    console.log(response.data);
}


//delete data
async function deleteStudent(id){
    // let response = await fetch(`${BASE_URL}/students/${id}`, {
    //     method:"DELETE",
    // });
    // console.log(response.status);

 let response = await http.delete(`/students/${id}`);
    console.log(response.status);
    console.log(response.data);
    
}

async function getStudents(){
    let response = await http(`/students`);
    console.log(response.data);
}