const URL = "https://622c30a3087e0e041e053fb1.mockapi.io/students"

// fetch(URL)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(er => er.message);

async function getStudents()
{
    try{
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);
    } catch (error)
    {
        console.error(er.message);
    }
}