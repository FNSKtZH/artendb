// übernimmt eine Array mit Objekten
// und den div, in dem die Tabelle eingefügt werden soll
// plus einen div, in dem die Liste der Felder angzeigt wird (falls dieser div mitgeliefert wird)
// baut damit eine Tabelle auf und fügt sie in den übergebenen div ein
// formular: wenn Aufruf von export_alt kommt, werden nur die ersten 10 Datensätze angezeigt

/*jslint node: true, browser: true, nomen: true, todo: true, plusplus: true*/
'use strict';

var _ = require('underscore'),
    $ = require('jquery');

var returnFunction = function (datensätze, felder_div, tabellen_div, formular) {
    var html = "",
        Feldname = "",
        html_ds_felder_div = "",
        erste_10_ds,
        $tabellen_div = $("#" + tabellen_div);

    if (!formular || formular !== 'export_alt') {
        if (datensätze.length > 10) {
            html += "Vorschau der ersten 10 von " + datensätze.length + " Datensätzen:";
        } else if (datensätze.length > 1) {
            html += "Vorschau der " + datensätze.length + " Datensätze:";
        } else {
            html += "Vorschau des einzigen Datensatzes:";
        }
    } else if (formular && formular === 'export_alt') {
        html += "Vorschau der ersten 10 Datensätze:";
    }
        
    // Tabelle initiieren
    html += '<div class="table-responsive"><table class="table table-bordered table-striped table-condensed table-hover">';
    // Titelzeile aufbauen
    // Zeile anlegen
    // gleichzeitig Feldliste für Formular anlegen
    if (felder_div) {
        if (felder_div === "DsFelder_div") {
            Feldname = "DsFelder";
        } else if (felder_div === "BsFelder_div") {
            Feldname = "BsFelder";
        }
    }
    html_ds_felder_div += '<label class="control-label" for="' + Feldname + '">Feld mit eindeutiger ID<br>in den Importdaten</label>';
    html_ds_felder_div += '<select multiple class="controls form-control input-sm" id="' + Feldname + '" style="height:' + ((Object.keys(datensätze[0]).length * 19) + 9)  + 'px">';
    html += "<thead><tr>";

    // Tabellenzeilen aufbauen
    // nur die ersten 10 Datensätze anzeigen
    erste_10_ds = _.first(datensätze, 10);

    if (formular === 'export_alt') {
        // die obligatorischen Felder müssen immer enthalten sein
        // sonst fehlen in der Tabelle oder Titelzeile Zellen
        _.each(erste_10_ds, function (ds) {
            if (!ds.ref) ds.ref = '';
            if (!ds.gisLayer) ds.gisLayer = '';
            if (!ds.distance) ds.distance = '';
            if (!ds.nameLat) ds.nameLat = '';
            if (!ds.nameDeu) ds.nameDeu = '';
            if (!ds.artwert) ds.artwert = '';
        });
    }

    // durch die Felder des ersten Datensatzes zirkeln
    _.each(erste_10_ds[0], function (feldwert, feldname) {
        // Spalte anlegen
        html += "<th>" + feldname + "</th>";
        // Option für Feldliste anfügen
        html_ds_felder_div += '<option value="' + feldname + '">' + feldname + '</option>';
    });
    // Titelzeile abschliessen
    html += "</tr></thead><tbody>";
    // Feldliste abschliessen
    html_ds_felder_div += '</select>';
    if (felder_div) {
        // nur, wenn ein felder_div übergeben wurde
        $("#"+felder_div).html(html_ds_felder_div);
    }

    // Tabellenzeilen aufbauen
    _.each(erste_10_ds, function (datensatz) {
        // Zeile anlegen
        html += "<tr>";
        // durch die Felder zirkeln
        _.each(datensatz, function (feldwert, feldname) {
            // Spalte anlegen
            html += "<td>";
            if (feldwert === null) {
                // Null-Werte als leer anzeigen
                html += "";
            } else if (typeof feldwert === "object") {
                html += JSON.stringify(feldwert);
            } else if (feldwert || feldwert === 0) {
                html += feldwert;
            } else if (feldwert === false) {
                // dafür sogen, dass false auch angezeigt wird
                // ohne diese Zeile bleibt das Feld sonst leer
                html += feldwert;
            } else {
                // nullwerte als leerwerte (nicht) anzeigen
                html += "";
            }
            // Spalte abschliessen
            html += "</td>";
        });
        // Zeile abschliessen
        html += "</tr>";
    });

    // Tabelle abschliessen
    html += '</tbody></table></div>';
    // html in div einfügen
    $tabellen_div
        .html(html)
        .css("margin-top", "20px")
        // sichtbar stellen
        .show();
    // fenster scrollen
    if (!formular) {
        $('html, body').animate({
            scrollTop: $tabellen_div.offset().top
        }, 2000);
    }
};

module.exports = returnFunction;