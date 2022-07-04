let pURL = "https://my-json-server.typicode.com/grayTingle/fakeAPI/db";

let objNav = document.querySelector("#jshead");

//use the api
fetch(pURL)
.then (response => response.json())
.then (info => {

    console.log(info);

    info.forEach(menu => {


        
    });


})
.catch (error => console.log(error))

//finding people

//document.querySelector('#btnSee').onclick = () => {

// fetch("")
// .then(resp => resp.json())
// .then(data => {
//  document.querySelector("#userName").textContent = data.user;
//   document.querySelector("dspUser").textContent = data.user
// })

//}