var carparts = [
    {
        "title": "Steering",
        "loc": {"top":"35%",
        "left":"39%","width":"30","height":"30"},
        "designlead": "Alex Smart",
        "leadpic": "assets/images/team/alex_smart.jpg",
        "desc":"The Steering component is what makes the car steer through obstacles, maneuver through tight spaces and slide around corners."
    },
    {
        "title": "Suspension",
        "loc": {"top":"48%",
        "left":"31%","width":"30","height":"30"},
        "designlead": "Asif Habib",
        "leadpic": "assets/images/team/alex_smart.jpg",
        "desc": "The Suspension"
    }
];

function createPopover() {
    function popover(subsystem) {
        return '<div id="' + subsystem.title + '" class="carpart" data-toggle="popover" data-trigger="hover" data-html="true" title="' + subsystem.title + '" style="width:' + subsystem.loc.width + ';height:' + subsystem.loc.height + ';top:' + subsystem.loc.top + ';left:' + subsystem.loc.left + '"  data-content="<div class=\'carpopover\'><img src=\'' + subsystem.leadpic + '\' alt=\'' + subsystem.designlead + '\'><div class=\'popovercontent\'><p><b>System Lead:</b> ' + subsystem.designlead + '</p><p>' + subsystem.desc + '</p></div></div>"></div>'
    }

    carparts.forEach(function (tile) {
        console.log(tile);
        var popov = popover(tile);
        $('div#car').append(popov);
    });

    $(function () {
        $('[data-toggle="popover"]').popover({
            container: 'body'
        })
    })
}