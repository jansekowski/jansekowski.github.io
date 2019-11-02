"use strict";

$.getJSON("https://jsonplaceholder.typicode.com/users/1",
    function (data) {
        console.log(data);
        $("#get-data-button").click(function () {
            $("#displayed-data").append("<li>" + data.id + ", " + data.username + ", " + data.website + "</li>");
        });
    });