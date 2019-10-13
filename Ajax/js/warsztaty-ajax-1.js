"use strict";

function getData(){
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then (response => response.json())
    .then (response => {
        console.log(response);
        console.log(response.id + " " + response.username + " " + response.website);
        document.getElementById("displayed-data").innerHTML=`<li>${response.id}, ${response.username}, ${response.website}</li>`;
    });
};

document.getElementById("get-data-button").addEventListener("click", getData);