var results = {
    2018: {
        "mike": 0,
        "car": {
            "name": "r18",
            "weight": "215",
            "imgloc": 'assets/images/cars/r18.jpg'
        },
        "racetitles": ["Maryland", "Kansas", "Oregon"],
        "races": [{
            "Design": 1,
            "Acceleration": 5,
            "Manuverability": 2,
            "Hill_Climb": 5,
            "Suspension_and_Traction": 1,
            "Cost": 11,
            "Sales": 2,
            "Endurance": 5,
            "Overall": 1,
        }, {
            "Design": 1,
            "Acceleration": 5,
            "Manuverability": 2,
            "Sled_Pull": 5,
            "Suspension_and_Traction": 1,
            "Cost": 11,
            "Sales": 2,
            "Endurance": 5,
            "Overall": 1,
        }, {
            "Design": 1,
            "Acceleration": 6,
            "Manuverability": 2,
            "Hill_Climb": 11,
            "Rock_Crawl": 1,
            "Cost": 16,
            "Sales": 1,
            "Endurance": 2,
            "Overall": 1,
        }]
    },
    2017: {
        "mike": 0,
        "car": {
            "name": "r17",
            "weight": "215",
            "imgloc": 'assets/images/cars/r17.jpg'
        },
        "racetitles": ["California", "Kansas", "Illinois"],
        "races": [{
            "Design": 8,
            "Acceleration": 13,
            "Manuverability": 3,
            "Hill_Climb": 21,
            "Suspension_and_Traction": 3,
            "Cost": 5,
            "Sales": 2,
            "Endurance": 8,
            "Overall": 3,
        }, {
            "Design": 1,
            "Acceleration": 2,
            "Sled_Pull": 13,
            "Cost": 10,
            "Sales": 17,
            "Endurance": 38,
            "Overall": 28,
        }, {
            "Design": 1,
            "Acceleration": 16,
            "Manuverability": 3,
            "Hill_Climb": 15,
            "Rock_Crawl": 4,
            "Cost": 6,
            "Endurance": 15,
            "Overall": 4,
        }]
    },
    2016: {
        "mike": 0,
        "car": {
            "name": "r16",
            "weight": "215",
            "imgloc": 'assets/images/cars/r16.jpg'
        },
        "racetitles": ["Tennessee", "California", "Rochester"],
        "races": [{
            "Design": 4,
            "Acceleration": 2,
            "Manuverability": 4,
            "Sled_Pull": 24,
            "Suspension_and_Traction": 27,
            "Cost": 9,
            "Sales": 16,
            "Endurance": 2,
            "Overall_Static": 3,
            "Overall_Dynamic": 9,
            "Overall": 1,
        }, {
            "Design": 3,
            "Acceleration": 4,
            "Manuverability": 5,
            "Hill_Climb": 23,
            "Suspension_and_Traction": 15,
            "Cost": 14,
            "Sales": 12,
            "Endurance": 3,
            "Overall_Static": 2,
            "Overall_Dynamic": 8,
            "Overall": 3,
        }, {
            "Design": 3,
            "Acceleration": 8,
            "Manuverability": 2,
            "Hill_Climb": 2,
            "Suspension_and_Traction": 4,
            "Cost": 10,
            "Sales": 11,
            "Endurance": 7,
            "Overall_Static": 4,
            "Overall_Dynamic": 2,
            "Overall": 2,
        }]
    },
    // 2015: {
    //     "mike": 0,
    //     "racetitles": ["", "", ""],
    //     "races": [{}, {}, {}]
    // },
    // 2014: {
    //     "mike": 0,
    //     "racetitles": ["", "", ""],
    //     "races": [{}, {}, {}]
    // },
    // 2013: {
    //     "mike": 0,
    //     "racetitles": ["", "", ""],
    //     "races": [{}, {}, {}]
    // },
    // 2012: {
    //     "mike": 0,
    //     "racetitles": ["", "", ""],
    //     "races": [{}, {}, {}]
    // }
};

function dispResults(year) {
    function createCategory(cat) {
        var [name, position] = cat;
        name = name.split('_').join(' ');
        switch (position) {
            case 1:
                return '<li class="list-group-item"><div class="row"><div class="col-3"><span class="badge badge-gold badge-pill">1st</span></div><div class="col-9"><b>' + name + ': </b>1st</div></div></li>'
            case 2:
                return '<li class="list-group-item"><div class="row"><div class="col-3"><span class="badge badge-silver badge-pill">2nd</span></div><div class="col-9"><b>' + name + ': </b>2nd</div></div></li>'
            case 3:
                return '<li class="list-group-item"><div class="row"><div class="col-3"><span class="badge badge-silver badge-pill">3rd</span></div><div class="col-9"><b>' + name + ': </b>3rd</div></div></li>'
            case 11:
            case 12:
            case 13:
                return '<li class="list-group-item"><div class="row"><div class="col-3"></div><div class="col-9"><b>' + name + ': </b>' + position + 'th</div></div></li>'
            default:
                switch (position % 10) {
                    case 1:
                        return '<li class="list-group-item"><div class="row"><div class="col-3"></div><div class="col-9"><b>' + name + ': </b>' + position + 'st</div></div></li>'
                    case 2:
                        return '<li class="list-group-item"><div class="row"><div class="col-3"></div><div class="col-9"><b>' + name + ': </b>' + position + 'nd</div></div></li>'
                    case 3:
                        return '<li class="list-group-item"><div class="row"><div class="col-3"></div><div class="col-9"><b>' + name + ': </b>' + position + 'rd</div></div></li>'
                    default:
                        return '<li class="list-group-item"><div class="row"><div class="col-3"></div><div class="col-9"><b>' + name + ': </b>' + position + 'th</div></div></li>'
                }
        }
    }

    function createRaceEvent(eventname, eventresults) {
        eventlist = "";
        Object.entries(eventresults).forEach(function (cat) {
            eventlist += createCategory(cat);
        });
        return '<div class="card"><div class="card-header collapsed" id="' + eventname + '" data-toggle="collapse" data-target="#' + eventname + '-collapse" aria-expanded="false" aria-controls="' + eventname + '-collapse"><h5 class="mb-0">' + eventname + ' Results<span class="dropdown"></span></h5></div><div id="' + eventname + '-collapse" class="collapse" aria-labelledby="' + eventname + '" data-parent="#accordion"><div class="card-body"><ul class="list-group-flush">' + eventlist + '</ul></div></div></div>'
    }

    yearresults = results[year];
    var eventtitle = '</h2><img src="' + yearresults.car.imgloc + '" alt="Car from ' + year + '">';
    $('div#showresult').empty().append(eventtitle);
    var $accordion = $("<div>", {
        id: "accordion"
    });
    yearresults.races.forEach(function (eventresults, index) {
        var eventname = yearresults.racetitles[index];
        $accordion.append(createRaceEvent(eventname, eventresults));
    });
    $('div#showresult').append($accordion);
}