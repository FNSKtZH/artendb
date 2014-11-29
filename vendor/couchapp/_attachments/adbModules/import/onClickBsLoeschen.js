// wenn BsLoeschen geklickt wird

/*jslint node: true, browser: true, nomen: true, todo: true, plusplus: true*/
'use strict';

var $                                          = require('jquery'),
    entferneBeziehungssammlungAusAllenObjekten = require('./entferneBeziehungssammlungAusAllenObjekten');

module.exports = function () {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;

    // Rückmeldung anzeigen
    $("#importierenBsDsBeschreibenHinweis")
        .alert()
        .removeClass("alert-success")
        .removeClass("alert-danger")
        .addClass("alert-info")
        .show();
    $("#importierenBsDsBeschreibenHinweisText").html("Bitte warten: Die Beziehungssammlung wird entfernt...");
    entferneBeziehungssammlungAusAllenObjekten($("#bsName").val());
};