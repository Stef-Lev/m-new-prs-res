//Scrolldown effect

//->Hero scrolldown

$(function () {
    $('#more').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#navigator").offset().top
        }, 1000);
    });
});

//->About scroll
$(function () {
    $('#aboutBtn').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 40
        }, 600);
    });
});


//->Work Exp scroll
$(function () {
    $('#workExpBtn').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#work-exp").offset().top - 40
        }, 600);
    });
});

//->Education scroll
$(function () {
    $('#eduBtn').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#edu").offset().top - 40
        }, 600);
    });
});

//->Awards scroll
$(function () {
    $('#awardBtn').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#awards").offset().top - 40
        }, 600);
    });
});

//->Skills scroll
$(function () {
    $('#skillBtn').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#skills").offset().top - 40
        }, 600);
    });
});

//->Certificates scroll
$(function () {
    $('#certBtn').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#certifications").offset().top - 40
        }, 600);
    });
});

//->Contact scroll
$(function () {
    $('#contBtn').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 40
        }, 600);
    });
});



// //Arrow button animation

$(function () {
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

//Skill bar filling animation


$(".meter > span").each(function () {
    $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate({
            width: $(this).data("origWidth") // or + "%" if fluid
        }, 1200);
});
