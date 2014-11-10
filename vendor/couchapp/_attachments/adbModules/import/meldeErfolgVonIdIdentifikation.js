// erhält dbs = "Ds" oder "Bs"

/*jslint node: true, browser: true, nomen: true, todo: true, plusplus: true*/
'use strict';

var _                               = require('underscore'),
    $                               = require('jquery'),
    meldeErfolgVonIdIdentifikation2 = require('./meldeErfolgVonIdIdentifikation2');

module.exports = function (dbs) {
    var $dbsFelderSelected       = $("#" + dbs + "Felder option:selected"),
        $dbsIdSelected           = $("#" + dbs + "Id option:selected"),
        idsVonDatensaetzen       = [],
        mehrfachVorkommendeIds   = [],
        idsVonNichtImportierbarenDatensaetzen = [],
        $db = $.couch.db('artendb');

    if ($dbsFelderSelected.length && $dbsIdSelected.length) {
        // beide ID's sind gewählt
        window.adb[dbs + "FelderId"] = $dbsFelderSelected.val();
        window.adb.DsId = $dbsIdSelected.val();
        window.adb[dbs + "Id"] = $dbsIdSelected.val();
        // das hier wird später noch für den Inmport gebraucht > globale Variable machen
        window.adb.zuordbareDatensaetze = [];
        $("#importieren_" + dbs.toLowerCase() + "_ids_identifizieren_hinweis_text")
            .alert()
            .html("Bitte warten, die Daten werden analysiert.<br>Das kann eine Weile dauern...")
            .removeClass("alert-success")
            .removeClass("alert-danger")
            .addClass("alert-info")
            .show();
        $('html, body').animate({
            scrollTop: $("#importieren_" + dbs.toLowerCase() + "_ids_identifizieren_collapse").offset().top
        }, 2000);

        // Dokumente aus der Gruppe der Datensätze holen
        // durch alle loopen. Dabei einen Array von Objekten bilden mit id und guid
        // kontrollieren, ob eine id mehr als einmal vorkommt
        if (window.adb.DsId === "guid") {
            $db.view('artendb/all_docs', {
                success: function (data) {
                    var name_des_id_felds = window.adb[dbs + "FelderId"],
                        zugehoerigesObjekt;
                    // durch die importierten Datensätze loopen
                    _.each(window.adb[dbs.toLowerCase() + "Datensätze"], function (import_datensatz) {
                        if (idsVonDatensaetzen.indexOf(import_datensatz[name_des_id_felds]) === -1) {
                            // diese ID wurde noch nicht hinzugefügt > hinzufügen
                            idsVonDatensaetzen.push(import_datensatz[name_des_id_felds]);
                            // prüfen, ob die ID zugeordnet werden kann
                            zugehoerigesObjekt = _.find(data.rows, function (objekt_row) {
                                return objekt_row.key === import_datensatz[name_des_id_felds];
                            });
                            if (zugehoerigesObjekt) {
                                window.adb.zuordbareDatensaetze.push(import_datensatz[name_des_id_felds]);
                            } else {
                                // diese ID konnte nicht hinzugefügt werden. In die Liste der nicht hinzugefügten aufnehmen
                                idsVonNichtImportierbarenDatensaetzen.push(import_datensatz[name_des_id_felds]);
                            }
                        } else {
                            // diese ID wurden schon hinzugefügt > mehrfach!
                            mehrfachVorkommendeIds.push(import_datensatz[name_des_id_felds]);
                        }
                    });
                    meldeErfolgVonIdIdentifikation2(mehrfachVorkommendeIds, idsVonDatensaetzen, idsVonNichtImportierbarenDatensaetzen, dbs);
                },
                error: function () {
                    console.log('meldeErfolgVonIdentifikation: keine Daten erhalten');
                }
            });
        } else {
            $db.view('artendb/gruppe_id_taxonomieid?startkey=["' + window.adb.DsId + '"]&endkey=["' + window.adb.DsId + '",{},{}]', {
                success: function (data) {
                    var name_des_id_felds = window.adb[dbs + "FelderId"],
                        objekt;
                    // durch die importierten Datensätze loopen
                    _.each(window.adb[dbs.toLowerCase() + "Datensätze"], function (import_datensatz) {
                        if (idsVonDatensaetzen.indexOf(import_datensatz[name_des_id_felds]) === -1) {
                            // diese ID wurde noch nicht hinzugefügt > hinzufügen
                            idsVonDatensaetzen.push(import_datensatz[name_des_id_felds]);
                            // prüfen, ob die ID zugeordnet werden kann
                            var zugehoerigesObjekt = _.find(data.rows, function (objekt_row) {
                                return objekt_row.key[2] === import_datensatz[name_des_id_felds];
                            });
                            if (zugehoerigesObjekt) {
                                objekt = {};
                                objekt.Id = parseInt(import_datensatz[name_des_id_felds], 10);
                                objekt.Guid = zugehoerigesObjekt.key[1];
                                window.adb.zuordbareDatensaetze.push(objekt);
                            } else {
                                // diese ID konnte nicht hinzugefügt werden. In die Liste der nicht hinzugefügten aufnehmen
                                idsVonNichtImportierbarenDatensaetzen.push(import_datensatz[name_des_id_felds]);
                            }
                        } else {
                            // diese ID wurden schon hinzugefügt > mehrfach!
                            mehrfachVorkommendeIds.push(import_datensatz[name_des_id_felds]);
                        }
                    });
                    meldeErfolgVonIdIdentifikation2(mehrfachVorkommendeIds, idsVonDatensaetzen, idsVonNichtImportierbarenDatensaetzen, dbs);
                },
                error: function () {
                    console.log('meldeErfolgVonIdentifikation: keine Daten erhalten');
                }
            });
        }
    }
};