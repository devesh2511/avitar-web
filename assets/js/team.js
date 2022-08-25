// Images for team members will be in /assets/images/team/---.jpg
// file name will be full name all lowercase and _ for spaces.
// Alex Smart -> alex_smart.jpg

var teamMembers = {
    "Eboard":[
        {
            "title":"Team Manager",
            "name":"Chris Mehalakes",
            "email":"teammanager@ritbaja.com",
            "major":"Mechanical Engineering Tech",
            "gradYear":"2019"
        },
        {
            "title":"Project Manager",
            "name":"Justin Neves",
            "email":"projectmanager@ritbaja.com",
            "major":"Civil Engineering Tech",
            "gradYear":"2020"
        },
        {
            "title":"Treasurer",
            "name":"Adam Seidman",
            "email":"treasurer@ritbaja.com",
            "major":"Computer Engineering",
            "gradYear":"2022"
        },
        {
            "title":"Secretary",
            "name":"Colton Johnson",
            "email":"secretary@ritbaja.com",
            "major":"Mechanical Engineering",
            "gradYear":"2020"
        }
    ],
    "DesignTeam":[],
    "Manufacturing":[],
    "Seniors":[]
};

function createTeamTiles(year){

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
    $('h1.group').each(function(value, i){
        $(this).css('top', $(this).width() + 106);
    });
    
    // var file = window.document.location.href.split("/");
    // file = file[file.length - 1].split('#');
    // year = file[0].split('=');
    // if (year.length == 1) year = 18;
    // else year = parseInt(year[1]);
    // createGalleryTiles(year + 2000);
});