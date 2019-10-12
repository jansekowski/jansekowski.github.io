$(function(){ //zamiast $ może być jquery

    $( "body" ).find( "p" ).css( "color", "red"); //wybieranie wszystkich p w body
    $( "body" ).find( "p" ).eq(1).css( "color", "blue"); //wybieranie drugiego p w body

    $("p").each(function(index){
        $(this).addClass("paragraf-" + index);
        console.log(jQuery(this));
    });
});