var gallery = {
    "2018": [{
        "title": "IMG1",
        "imageloc": "assets/images/gallery/2018/P1110118.JPG",
        "desc": "description here"
    },{
        "title": "IMG2",
        "imageloc": "assets/images/gallery/2018/P1110119.JPG",
        "desc": "description here"
    },{
        "title": "IMG3",
        "imageloc": "assets/images/gallery/2018/P1110120.JPG",
        "desc": "description here"
    },{
        "title": "IMG4",
        "imageloc": "assets/images/gallery/2018/P1110121.JPG",
        "desc": "description here"
    }], 
    "2017": [], 
    "2016": [], 
    "2015": []
};

function createGalleryTiles(year){

    function hextile(img, index) {
        return '<li class="hex"><div class="hexIn" data-toggle="modal" data-target="#gallery' + index + '"><a class="hexLink" href="#"><img src="' + img.imageloc + '" alt="" /><h1>' + img.title + '</h1><p>' + img.desc + '</p></a></div></li>'
    }

    function modaltile(img, index) {
        return '<div class="modal fade" id="gallery' + index + '" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">' + img.title + '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><img src="' + img.imageloc + '" width="100%"><div class="modal-body"><p>' + img.desc + '</p></div></div></div></div>'
    }

    gallery[year].forEach(function (img, i) {
        var hex = hextile(img, i);
        var popup = modaltile(img, i);
        $('ul#hexGrid').append(hex);
        $('div#gallery-hex').append(popup);
    });
}

$(document).ready(function(){
    $('h1.year').each(function(value, i){   
        $(this).css('top', $(this).width() + 106);
    });
    var file = window.document.location.href.split("/");
    file = file[file.length - 1].split('#');
    year = file[0].split('=');
    if (year.length == 1) year = 18;
    else year = parseInt(year[1]);
    createGalleryTiles(year + 2000);
});