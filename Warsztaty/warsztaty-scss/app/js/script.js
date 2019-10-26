let width = $(window).width();

function classChange(){
    if (width < 768) {
        $("header").removeClass("fixed-top").addClass("mobile");
    } else{
        $("header").addClass("fixed-top").removeClass("mobile")
    }
}

window.addEventListener('resize', classChange);