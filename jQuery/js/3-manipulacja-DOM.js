$(function(){ //zamiast $ może być jquery
    //     alert("Test");
    
    let tekstParagrafuPierwszego=$("#paragraf").text();
    $(".paragraf").text("Ala ma kota"); //zastępowanie tekstu
    $(".paragrafnext").html("To jest <strong>paragraf</strong>"); //żeby zadziałały tagi trzeba dać html, a nie text
    $(".paragrafnext").append("Appenduję"); 
    $(".paragrafnext").prepend("Prependuję");
    $(".paragrafnext").after("Afteruję");
    $(".paragrafnext").before("Beforuję");

    $("strong").remove(); //usuwa element z zawartością
    $(".paragraf").empty(); //usuwa zawartość

    $(".paragrafnext").css("color", "red") //zmiana 1 elementu CSS
    $(".paragrafnext").css({"font-size":"3em", "color":"blue"}); //zmiana kilku elementów CSS
    $("input#imie").val("Nowe imię"); //zmiana wartości pola formularza
    $("h1").addClass("dodatkowa-klasa");
    $("h1").removeClass("dodatkowa-klasa");

    console.log(tekstParagrafuPierwszego);
    });