"use: strict";

let koniecLicznik = 0;

function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then(response => response.json())
        .then(response => {
            for (let user of response) {
                let pUserId = document.createElement('p');
                pUserId.innerHTML = "User ID: " + user.id;
                document.body.appendChild(pUserId);

                let pUserName = document.createElement('p');
                pUserName.innerHTML = "User name: " + user.name;
                document.body.appendChild(pUserName);

                let pUserWebsite = document.createElement('p');
                pUserWebsite.innerHTML = "User URL: " + user.website;
                document.body.appendChild(pUserWebsite);
            }
        });
};

window.onscroll = function () {
    let d = document.documentElement;
    let wysokoscOkna = window.innerHeight;
    let wysokoscStrony = d.offsetHeight;
    let ileScrolla = d.scrollTop;
    let sumaIleScrollaWysokoscOkna = Math.ceil(ileScrolla + wysokoscOkna);


    if (sumaIleScrollaWysokoscOkna >= wysokoscStrony) {
        koniecLicznik += 1;
        console.log("Doszliśmy do końca tyle razy: " + koniecLicznik);
        getUsers();

    };
};

