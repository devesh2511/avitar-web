AOS.init({
    duration: 1200,
})

var mobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    mobile = true;
}

var currentpage = 0;
var scrollpositions = []
var scrolllock = false;

// pages = ["#about", "#news", "#team"];
var galleryYears = [2018, 2017, 2016, 2015];

function isScrolledIntoView(elem) {
    var offset = 0;
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom - offset <= docViewBottom) && (elemTop + offset >= docViewTop));
}

function scrolledIntoElement(elem) {
    var docViewTop = $(window).scrollTop();
    var elemTop = $(elem).offset().top;

    return docViewTop >= elemTop;
}

function scrolledPassedElement(elem, offset) {
    var docViewTop = $(window).scrollTop();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return docViewTop >= (elemBottom - offset);
}

function unlockscroll() {
    setTimeout(function () { scrolllock = false; }, 100)
}

var consecutivedown = 0;
var consecutiveup = 0;
function inarow(delta) {
    var margin = 5;
    if (delta <= 0) {
        consecutiveup = 0;
        consecutivedown++;
    }
    else {
        consecutivedown = 0;
        consecutiveup++;
    }
    console.log(consecutivedown, consecutiveup);
    if (consecutivedown == margin) {
        consecutivedown = 0;
        return -1;
    }
    if (consecutiveup == margin) {
        consecutiveup = 0;
        return 1;
    }
    return 0;
}

function createGalleries() {
}

var bkgtxt = '<p class="bkgtxt">                                                                                                                                                                                                                                                                                                                                                                                                                                                </p>'

if (!mobile) {
    console.log("Setting Width");
    $('#navbarNav').css('margin-right', $('a.navbar-brand').width() - 100);
}

$(document).ready(function () {
    $('.page').each(function () {
        scrollpositions.push($(this).offset().top);
        console.log(scrollpositions);
    });
    var file = window.document.location.href.split("/");
    file = file[file.length - 1].split('#');
    file = file[0];
    if (file == 'index.html' || file == '' || file == 'Bajasite') {
        createNewsTiles();
        createGalleries();
        $("#about").append(bkgtxt);
        dispResults(2018);
        Object.keys(results).forEach(function (year) { $('#results .col-md-4').append('<button type="button" class="btn btn-primary" onclick="dispResults(' + year + ');">' + year + '</button>') });
        createSponsorLink();
        $(window).scroll(function () {
            if (scrolledIntoElement('#about')) {
                $('nav#mynav').addClass('bg-white');
                $('a.nav-link').each(function () {
                    $(this).addClass('txt-black');
                });
            }
            else {
                $('nav#mynav').removeClass('bg-white');
                $('a.nav-link').each(function () {
                    $(this).addClass('txt-black');
                });
            }
        });
        if (mobile) {
            console.log(mobile);
            $("#about").css('padding-bottom', 50 + $("#jumpcar").height());
        }
    }
    if (file == 'thecar.html' || file == 'thecar') {
        if (!mobile) createPopover();
        $(window).scroll(function () {
            if (scrolledPassedElement('#car', 50)) $('nav#mynav a').addClass('txt-white');
            else $('nav#mynav a').removeClass('txt-white');
        });
    }
});

