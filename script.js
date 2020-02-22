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


$(function abou01() {
    $('#aboutBtn').on('click', function (e) {
        if ($(".icon-bar").is(":hidden")) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#about").offset().top - 40
            }, 600);
        } else {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#about").offset().top - 340
            }, 300);
        }
    });
});


//->Work Exp scroll
$(function exp01() {
    $('#workExpBtn').on('click', function (e) {
        if ($(".icon-bar").is(":hidden")) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#work-exp").offset().top - 40
            }, 600);
        } else {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#work-exp").offset().top - 340
            }, 300);
        }
    });
});

//->Education scroll
$(function edu01() {
    $('#eduBtn').on('click', function (e) {
        if ($(".icon-bar").is(":hidden")) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#edu").offset().top - 40
            }, 600);
        } else {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#edu").offset().top - 340
            }, 300);
        }
    });
});

//->Awards scroll
$(function aw01() {
    $('#awardBtn').on('click', function (e) {
        if ($(".icon-bar").is(":hidden")) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#awards").offset().top - 40
            }, 600);
        } else {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#awards").offset().top - 340
            }, 300);
        }
    });
});

//->Skills scroll
$(function sk01() {
    $('#skillBtn').on('click', function (e) {
        if ($(".icon-bar").is(":hidden")) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#skills").offset().top - 40
            }, 600);
        } else {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#skills").offset().top - 340
            }, 300);
        }
    });
});

//->Certificates scroll

$(function cert01() {
    $('#certBtn').on('click', function (e) {
        if ($(".icon-bar").is(":hidden")) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#certifications").offset().top - 40
            }, 600);
        } else {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#certifications").offset().top - 340
            }, 300);
        }
    });
})



//->Contact scroll
$(function cont01() {
    $('#contBtn').on('click', function (e) {
        if ($(".icon-bar").is(":hidden")) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#contact").offset().top - 40
            }, 600);
        } else {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#contact").offset().top - 340
            }, 300);
        }
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

//Skill bar filling animation (Still not functional)


// $(".meter > span").each(function () {
//     $(this)
//         .data("origWidth", $(this).width())
//         .width(0)
//         .animate({
//             width: $(this).data("origWidth") // or + "%" if fluid
//         }, 1200);
// });




//Auto close sandwich menu
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});