//Scrolldown effect

//->Hero scrolldown

$(function() {
    $('#more').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#navigator").offset().top
        }, 800);
    });
});

//->About scrolldown
$(function() {
    $('#aboutBtn').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#work-exp").offset().top
        }, 800);
    });
});



// //Arrow button animation

$(function() {
    setTimeout('topArrow()');
});

function topArrow() {
    $('#more').animate({
        marginBottom: '-=10px'
    }, 800).animate({
        marginBottom: '+=10px'
    }, 800);
    setTimeout('topArrow()', 1600);
}

$(".meter > span").each(function() {
    $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate({
            width: $(this).data("origWidth") // or + "%" if fluid
        }, 1200);
});