$.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
  function (data) {
    console.log(data);
    $("#getdata").click(function(){
    $("#getdata").after("<div id='dane-programisty'>" + data.imie + ' ' + data.nazwisko + ', ' + data.zawod+', '+ data.firma + "</div>");
    });
  })