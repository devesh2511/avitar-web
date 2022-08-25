var sponsorlist = {
    "platinum":["Kaiser.png", "Master_Cam.png", "PCC.png", "Solidworks.png", "Monster.png", "RIT.png", "Student_Gov.png", "Magna.png", "National_Instruments.png", "Rochester_Gear.png"],
    "gold":["Admar.jpg", "Blue_Origin.jpg", "Duke.jpg", "Harris.jpg", "Kell_tech.jpg", "Mahany.jpg", "Millennium.jpg", "TW_Metals.jpg"],
    "silver":["A&K.jpg", "Federal_Mogul_Motorparts.jpg", "Kenwell.jpg", "Polaris.jpg", "Smidgens.jpg", "Advanced_Auto.jpg", "GE_Aviation.jpg", "McGard.jpg", "RSTW.jpg", "TMF.jpg", "Botto_Brothers.jpg", "Gleason.jpg", "NTN.jpg", "Romold.jpg", "igus.jpg", "Cummins.jpg", "KOYO.jpg", "PCB.jpg", "SGS.jpg"],
    "bronze":["Autoparts.jpg", "Car_parts.jpg", "Dibellas.jpg", "JC_Whitney.jpg", "SKF.jpg", "US_Autoparts.jpg", "Bolt.jpg", "Diamond_wire.jpg", "Harvey_Engineering.jpg", "MITEE-BITE.jpg", "TLF.jpg"]
};


function createSponsorLink() {
    function sponsorimg(tier, link) {
        name = link.split('.')[0];
        if (name.includes('_')) name = name.split('_').join(" ");
        return '<img src="assets/images/sponsors/' + tier + '/' + link + '" alt="' + name + '">'
    }
    sponsorlist.platinum.forEach(function (sponsor) {
        var sponlink = sponsorimg('platinum', sponsor);
        $("div#platinum").append(sponlink);
    });
    sponsorlist.gold.forEach(function (sponsor) {
        var sponlink = sponsorimg('gold', sponsor);
        $("div#gold").append(sponlink);
    });
    sponsorlist.silver.forEach(function (sponsor) {
        var sponlink = sponsorimg('silver', sponsor);
        $("div#silver").append(sponlink);
    });
    sponsorlist.bronze.forEach(function (sponsor) {
        var sponlink = sponsorimg('bronze', sponsor);
        $("div#bronze").append(sponlink);
    });
}

function letsscrollTo(element, top, duration) {
    var to = top.offsetTop - 15;

    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}