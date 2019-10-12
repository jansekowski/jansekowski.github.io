$(function(){ //zamiast $ może być jquery
//     alert("Test");
$("#first").css({color: "orange"}).hide("slow").show(3000);

let second = $("#second"); //pobieranie elementów jak w CSSie.
let kolekcjaParagraf=$(".paragraf"); //pobieranie elementów jak w CSSie

console.log(kolekcjaParagraf);
});