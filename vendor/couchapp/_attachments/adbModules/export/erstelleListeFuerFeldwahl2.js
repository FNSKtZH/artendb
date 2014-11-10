/*jslint node: true, browser: true, nomen: true, todo: true, plusplus: true*/
'use strict';

var _ = require('underscore'),
    $ = require('jquery');

// braucht $ wegen .alert
var returnFunction = function (export_felder_arrays, formular) {
    var felderObjekt = {},
        hinweis_taxonomien,
        taxonomien,
        datensammlungen,
        beziehungssammlungen,
        ergaenzeFelderObjekt = require('./ergaenzeFelderObjekt'),
        erstelleExportfelder = require('./erstelleExportfelder');

    // in export_felder_arrays ist eine Liste der Felder, die in dieser Gruppe enthalten sind
    // sie kann aber Mehrfacheinträge enthalten, die sich in der Gruppe unterscheiden
    // Muster: Gruppe, Typ der Datensammlung, Name der Datensammlung, Name des Felds
    // Mehrfacheinträge sollen entfernt werden

    // dazu muss zuerst die Gruppe entfernt werden
    _.each(export_felder_arrays, function (export_felder) {
        export_felder.key.splice(0, 1);
    });

    // jetzt nur noch eineindeutige Array-Objekte (=Eigenschaftensammlungen) belassen
    export_felder_arrays = _.union(export_felder_arrays);
    // jetzt den Array von Objekten nach key sortieren
    export_felder_arrays = _.sortBy(export_felder_arrays, function (object) {
        return object.key;
    });

    // Im Objekt "FelderObjekt" werden die Felder aller gewählten Gruppen gesammelt
    felderObjekt = ergaenzeFelderObjekt(felderObjekt, export_felder_arrays);

    // bei allfälligen "Taxonomie(n)" Feldnamen sortieren
    if (felderObjekt["Taxonomie(n)"] && felderObjekt["Taxonomie(n)"].Eigenschaften) {
        felderObjekt["Taxonomie(n)"].Eigenschaften = window.adb.sortKeysOfObject(felderObjekt["Taxonomie(n)"].Eigenschaften);
    }

    // Taxonomien und Datensammlungen aus dem FelderObjekt extrahieren
    taxonomien = [];
    datensammlungen = [];
    beziehungssammlungen = [];

    _.each(felderObjekt, function (ds) {
        if (typeof ds === "object" && ds.Typ) {
            // das ist Datensammlung oder Taxonomie
            if (ds.Typ === "Datensammlung") {
                datensammlungen.push(ds);
            } else if (ds.Typ === "Taxonomie") {
                taxonomien.push(ds);
            } else if (ds.Typ === "Beziehung") {
                beziehungssammlungen.push(ds);
            }
        }
    });

    $.when(window.adb.holeDatensammlungenFürExportfelder()).done(function () {
        erstelleExportfelder(taxonomien, datensammlungen, beziehungssammlungen, formular);
    });

    if (!formular || formular === 'export') {
        // kontrollieren, ob Taxonomien zusammengefasst werden
        if ($("#exportieren_objekte_Taxonomien_zusammenfassen").hasClass("active")) {
            hinweis_taxonomien = "Die Eigenschaften wurden aufgebaut<br>Alle Taxonomien sind zusammengefasst";
        } else {
            hinweis_taxonomien = "Die Eigenschaften wurden aufgebaut<br>Alle Taxonomien werden einzeln dargestellt";
        }
        // Ergebnis rückmelden
        $("#exportieren_objekte_waehlen_gruppen_hinweis_text")
            .alert()
            .removeClass("alert-info")
            .removeClass("alert-danger")
            .addClass("alert-success")
            .show()
            .html(hinweis_taxonomien);
    }
};

module.exports = returnFunction;