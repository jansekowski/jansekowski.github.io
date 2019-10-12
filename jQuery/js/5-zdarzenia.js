$(function(){ //zamiast $ może być jquery


    //jedno zdarzenie:
    // $("p").click(function(){
    //     $(this).css("color", "orange");
    // });

    //grupa zdarzeń. Można wymieniać różne zdarzenia w ramach ON.
    $("p").on({
        "mouseenter": function(){
            $(this).css("color", "orange");
        },
        "mouseleave": function(){
            $(this).css("color", "inherit");
        }
    });
});