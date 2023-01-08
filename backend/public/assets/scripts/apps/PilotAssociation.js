var jabog = {};
$(document).ready(function () {
    $.ajax({
        method: 'GET',
        url: '/api/squad/getfreepilots',
        headers: {
            'accept': 'application/json'
        }
    }).done(function (d) {
        jabog.addPilotsToView(d);
    });
});

jabog.addPilotsToView = function (pilots) {
    for (var i = 0; i < pilots.length; i++) {
        var pilot = pilots[i];
        var div = $("<div/>", {
            id: "pilot-" + pilot.Id,
            class: "pilot",
            draggable: true,
            ondragstart: "drag(event)",
            text: pilot.User.UserName,
            "data-ac": pilot.FirstMuster.Id
        });
        if (pilot.Leads.length != 0) {
            var leadEl = $("#lead-" + pilot.Leads[0].Id);
            leadEl.append(div);
            leadEl.css("background-image", "url('" + acIcons[pilot.FirstMuster.Id] + "')");
        } else if (pilot.Wings.length != 0) {
            var wingEl = $("#wing-" + pilot.Wings[0].Id);
            wingEl.append(div);
            wingEl.css("background-image", "url('" + acIcons[pilot.FirstMuster.Id] + "')");
        } else if (pilot.SecondLeads.length != 0) {
            var sleadEl = $("#secondlead-" + pilot.SecondLeads[0].Id);
            sleadEl.append(div);
            sleadEl.css("background-image", "url('" + acIcons[pilot.FirstMuster.Id] + "')");

        } else if (pilot.SecondWings.length != 0) {
            var swingEl = $("#secondwing-" + pilot.SecondWings[0].Id);
            swingEl.append(div);
            swingEl.css("background-image", "url('" + acIcons[pilot.FirstMuster.Id] + "')");

        } else {
            $("#reserve-list").append(div);
        }
    }
};

function allowDrop(ev) {
    var pilots = $(ev.target).children(".pilot").length;
    if (ev.target.id.indexOf("pilot-") == -1) {
        if (pilots == 0 || ev.target.id == "reserve-list") {
            ev.preventDefault();
        }
    }
}

function drop(ev) {
    ev.preventDefault();
    var elementId = ev.dataTransfer.getData("id");
    var pilotId = elementId.split("-")[1];
    var flightInfo = ev.target.id.split("-");
    $.ajax({
        method: 'POST',
        url: '/api/squad/SetPilotSquad',
        contentType: 'application/json',
        data: JSON.stringify({
            pilotId: pilotId,
            flightId: flightInfo[1],
            position: flightInfo[0]
        }),
        headers: {
            accept: 'application/json'
        }
    }).done(function () {
        var source = $("#" + elementId);
        var imgcss = "url('" + acIcons[source.attr("data-ac")] + "')";
        $(ev.target).css("background-image", imgcss);
        source.parent().css("background-image", "");
        ev.target.innerHTML = "";
        ev.target.appendChild(document.getElementById(elementId));
    });
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
}

function dropHome(ev) {
    ev.preventDefault();
    var elementId = ev.dataTransfer.getData("id");
    var pilotId = elementId.split("-")[1];
    var flightInfo = ev.target.id.split("-");
    $.ajax({
        method: 'POST',
        url: '/api/squad/SetPilotSquad',
        contentType: 'application/json',
        data: JSON.stringify({
            pilotId: pilotId,
            flightId: null,
            position: "delete"
        }),
        headers: {
            accept: 'application/json'
        }
    }).done(function () {
        var source = $("#" + elementId);
        source.parent().css("background-image", "");
        ev.target.appendChild(document.getElementById(elementId));
    });
}