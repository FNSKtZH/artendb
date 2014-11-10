/*jslint node: true, browser: true, nomen: true, todo: true, plusplus: true*/
'use strict';

var _ = require("lists/lib/underscore");

// baut die Export-Objekte auf für alle export-lists
// benötigt Objekt und felder
// retourniert schonKopiert und exportObjekt
// exportFuer: ermöglicht anpassungen für spezielle Exporte, z.b. für das Artenlistentool
module.exports = function (objekt, felder, bez_in_zeilen, fasse_taxonomien_zusammen, filterkriterien, exportObjekte, exportFuer) {
    var exportObjekt = {},
        schonKopiert = false,
        filtereBeziehungspartner            = require('lists/lib/filtereBeziehungspartner'),
        convertToCorrectType                = require('lists/lib/convertToCorrectType'),
        fuegeObligatorischeFelderFuerAltEin = require('lists/lib/fuegeObligatorischeFelderFuerAltEin');

    // es müssen Felder übergeben worden sein
    // wenn nicht, aufhören
    if (!felder || felder.length === 0) {
        return {};
    }

    // wenn der Export für das Artenlistentool erstellt wird: Obligatorische Felder einfügen
    if (exportFuer && exportFuer === "alt") {
        // Für das ALT obligatorische Felder hinzufügen
        exportObjekt = fuegeObligatorischeFelderFuerAltEin(objekt, exportObjekt);

        // Für das ALT obligatorische Felder aus felder entfernen, sonst gibt es Probleme und es wäre unschön
        felder = _.reject(felder, function (feld) {
            return ["Artwert"].indexOf(feld.Feldname) >=0;
        });
    }

    // Neues Objekt aufbauen, das nur die gewünschten Felder enthält
    _.each(objekt, function (feldwert, feldname) {
        if (typeof feldwert !== "object" && feldname !== "_rev") {
            _.each(felder, function (feld) {
                if (feld.DsName === "Objekt" && feld.Feldname === feldname) {
                    exportObjekt[feldname] = feldwert;
                }
                if (feld.DsName === "Objekt" && feld.Feldname === "GUID" && feldname === "_id") {
                    exportObjekt.GUID = feldwert;
                }
            });
        }
    });

    _.each(felder, function (feld) {
        var export_feldname = feld.DsName + ": " + feld.Feldname,
            feldwert;
        // Taxonomie: Felder übernehmen
        // 2014.06.15: zweite Bedingung ausgeklammert, weil die Felder nur geliefert wurden, wenn zusammenfassend true war
        if (feld.DsTyp === "Taxonomie"/* && (fasse_taxonomien_zusammen || feld.DsName === objekt.Taxonomie.Name)*/) {
            // Leerwert setzen. Wird überschrieben, falls danach ein Wert gefunden wird
            if (fasse_taxonomien_zusammen) {
                exportObjekt["Taxonomie(n): " + feld.Feldname] = "";
            } else {
                exportObjekt[export_feldname] = "";
            }
            // wenn im objekt das zu exportierende Feld vorkommt, den Wert übernehmen
            if (objekt.Taxonomie && objekt.Taxonomie.Eigenschaften && typeof objekt.Taxonomie.Eigenschaften[feld.Feldname] !== "undefined") {
                if (fasse_taxonomien_zusammen) {
                    exportObjekt["Taxonomie(n): " + feld.Feldname] = objekt.Taxonomie.Eigenschaften[feld.Feldname];
                } else {
                    exportObjekt[export_feldname] = objekt.Taxonomie.Eigenschaften[feld.Feldname];
                }
            }
        }

        // Eigenschaftensammlungen: Felder übernehmen
        if (feld.DsTyp === "Datensammlung") {
            // das leere feld setzen. Wird überschrieben, falls danach ein Wert gefunden wird
            exportObjekt[export_feldname] = "";
            if (objekt.Eigenschaftensammlungen && objekt.Eigenschaftensammlungen.length > 0) {
                // Enthält das objekt diese Datensammlung?
                var gesuchte_ds = _.find(objekt.Eigenschaftensammlungen, function (datensammlung) {
                    return datensammlung.Name && datensammlung.Name === feld.DsName;
                });
                if (gesuchte_ds) {
                    // ja. Wenn die Datensammlung das Feld enthält > exportieren
                    if (gesuchte_ds.Eigenschaften && typeof gesuchte_ds.Eigenschaften[feld.Feldname] !== "undefined") {
                        exportObjekt[export_feldname] = gesuchte_ds.Eigenschaften[feld.Feldname];
                    }
                }
            }
        }

        if (feld.DsTyp === "Beziehung") {
            // das leere feld setzen. Wird überschrieben, falls danach ein Wert gefunden wird
            exportObjekt[export_feldname] = "";

            // wurde schon ein zusätzliches Feld geschaffen? wenn ja: hinzufügen
            if (feld.Feldname === "Beziehungspartner") {
                // noch ein Feld hinzufügen
                exportObjekt[feld.DsName + ": Beziehungspartner GUID(s)"] = "";
            }

            if (objekt.Beziehungssammlungen && objekt.Beziehungssammlungen.length > 0) {
                // suchen, ob das objekt diese Beziehungssammlungen hat
                // suche im objekt die Beziehungssammlung mit Name = feld.DsName
                var bs_mit_namen = _.find(objekt.Beziehungssammlungen, function (beziehungssammlung) {
                    return beziehungssammlung.Name && beziehungssammlung.Name === feld.DsName;
                });
                if (bs_mit_namen && bs_mit_namen.Beziehungen && bs_mit_namen.Beziehungen.length > 0) {
                    // Beziehungen, die exportiert werden sollen, in der Variablen "export_beziehungen" sammeln
                    // durch alle Beziehungen loopen und nur diejenigen anfügen, welche die Bedingungen erfüllen
                    var export_beziehungen = [];
                    _.each(bs_mit_namen.Beziehungen, function (beziehung) {
                        if (typeof beziehung[feld.Feldname] !== "undefined") {
                            // das gesuchte Feld kommt in dieser Beziehung vor
                            feldwert = convertToCorrectType(beziehung[feld.Feldname]);
                            if (filterkriterien && filterkriterien.length > 0) {
                                _.each(filterkriterien, function (filterkriterium) {
                                    var dsTyp = filterkriterium.DsTyp,
                                        dsName = filterkriterium.DsName,
                                        feldname = filterkriterium.Feldname,
                                        filterwert = convertToCorrectType(filterkriterium.Filterwert),
                                        vergleichsoperator = filterkriterium.Vergleichsoperator,
                                        beziehungspartner;
                                    if (dsTyp === "Beziehung" && dsName === feld.DsName && feldname === feld.Feldname) {
                                        // Beziehungspartner sind Objekte und müssen separat gefiltert werden
                                        if (feldname === "Beziehungspartner") {
                                            beziehungspartner = filtereBeziehungspartner(feldwert, filterwert, vergleichsoperator);
                                            if (beziehungspartner.length > 0) {
                                                beziehung.Beziehungspartner = beziehungspartner;
                                                export_beziehungen.push(beziehung);
                                            }
                                        } else {
                                            // jetzt müssen die möglichen Vergleichsoperatoren berücksichtigt werden
                                            if (vergleichsoperator === "kein" && feldwert == filterwert) {
                                                export_beziehungen.push(beziehung);
                                            } else if (vergleichsoperator === "kein" && typeof feldwert === "string" && feldwert.indexOf(filterwert) >= 0) {
                                                export_beziehungen.push(beziehung);
                                            } else if (vergleichsoperator === "=" && feldwert == filterwert) {
                                                export_beziehungen.push(beziehung);
                                            } else if (vergleichsoperator === ">" && feldwert > filterwert) {
                                                export_beziehungen.push(beziehung);
                                            } else if (vergleichsoperator === ">=" && feldwert >= filterwert) {
                                                export_beziehungen.push(beziehung);
                                            } else if (vergleichsoperator === "<" && feldwert < filterwert) {
                                                export_beziehungen.push(beziehung);
                                            } else if (vergleichsoperator === "<=" && feldwert <= filterwert) {
                                                export_beziehungen.push(beziehung);
                                            }
                                        }
                                    }
                                });
                            } else {
                                // kein Filter auf Feldern - Beziehung hinzufügen
                                // aber sicherstellen, dass sie nicht schon drin ist
                                if (!_.contains(export_beziehungen, beziehung)) {
                                    export_beziehungen.push(beziehung);
                                }
                            }
                        }
                    });
                    if (export_beziehungen.length > 0) {
                        // jetzt unterscheiden, ob alle Treffer in einem Feld oder pro Treffer eine Zeile exportiert wird
                        if (bez_in_zeilen) {
                            // pro Treffer eine neue Zeile erstellen
                            schonKopiert = false;
                            // durch Beziehungen loopen
                            _.each(export_beziehungen, function (export_beziehung) {
                                // exportObjekt kopieren
                                var export_objekt_kopiert = _.clone(exportObjekt);
                                // durch die Felder der Beziehung loopen
                                _.each(export_beziehung, function (export_beziehung_feldwert, export_beziehung_feldname) {
                                    if (export_beziehung_feldname === "Beziehungspartner") {
                                        // zuerst die Beziehungspartner in JSON hinzufügen
                                        export_objekt_kopiert[feld.DsName + ": " + export_beziehung_feldname] = export_objekt_kopiert[feld.DsName + ": " + export_beziehung_feldname] || [];
                                        export_objekt_kopiert[feld.DsName + ": " + export_beziehung_feldname].push(export_beziehung_feldwert);
                                        // Reines GUID-Feld ergänzen
                                        if (!export_objekt_kopiert[feld.DsName + ": Beziehungspartner GUID(s)"]) {
                                            export_objekt_kopiert[feld.DsName + ": Beziehungspartner GUID(s)"] = export_beziehung_feldwert[0].GUID;
                                        } else {
                                            export_objekt_kopiert[feld.DsName + ": Beziehungspartner GUID(s)"] += ", " + export_beziehung_feldwert[0].GUID;
                                        }
                                    } else {
                                        // Vorsicht: Werte werden kommagetrennt. Also müssen Kommas ersetzt werden
                                        if (!export_objekt_kopiert[feld.DsName + ": " + export_beziehung_feldname]) {
                                            export_objekt_kopiert[feld.DsName + ": " + export_beziehung_feldname] = export_beziehung_feldwert;
                                        } else {
                                            export_objekt_kopiert[feld.DsName + ": " + export_beziehung_feldname] += ", " + export_beziehung_feldwert;
                                        }
                                    }
                                });
                                exportObjekte.push(export_objekt_kopiert);
                                schonKopiert = true;
                            });
                        } else {
                            // jeden Treffer kommagetrennt in dasselbe Feld einfügen
                            // durch Beziehungen loopen
                            _.each(export_beziehungen, function (export_beziehung) {
                                // durch die Felder der Beziehung loopen
                                _.each(export_beziehung, function (feldwert, feldname) {
                                    if (feldname === "Beziehungspartner") {
                                        // zuerst die Beziehungspartner in JSON hinzufügen
                                        if (!exportObjekt[feld.DsName + ": " + feldname]) {
                                            exportObjekt[feld.DsName + ": " + feldname] = [];
                                        }
                                        exportObjekt[feld.DsName + ": " + feldname].push(feldwert);
                                        // Reines GUID-Feld ergänzen
                                        if (!exportObjekt[feld.DsName + ": Beziehungspartner GUID(s)"]) {
                                            exportObjekt[feld.DsName + ": Beziehungspartner GUID(s)"] = feldwert[0].GUID;
                                        } else {
                                            exportObjekt[feld.DsName + ": Beziehungspartner GUID(s)"] += ", " + feldwert[0].GUID;
                                        }
                                        // es gibt einen Fehler, wenn replace für einen leeren Wert ausgeführt wird, also kontrollieren
                                    } else if (typeof feldwert === "number") {
                                        // Vorsicht: in Nummern können keine Kommas ersetzt werden - gäbe einen error
                                        if (!exportObjekt[feld.DsName + ": " + feldname]) {
                                            exportObjekt[feld.DsName + ": " + feldname] = feldwert;
                                        } else {
                                            exportObjekt[feld.DsName + ": " + feldname] += ", " + feldwert;
                                        }
                                    } else {
                                        // Vorsicht: Werte werden kommagetrennt. Also müssen Kommas ersetzt werden
                                        if (!exportObjekt[feld.DsName + ": " + feldname]) {
                                            exportObjekt[feld.DsName + ": " + feldname] = feldwert.replace(/,/g, '(Komma)');
                                        } else {
                                            exportObjekt[feld.DsName + ": " + feldname] += ", " + feldwert.replace(/,/g, '(Komma)');
                                        }
                                    }
                                });
                            });
                        }
                    }
                }
            }
        }
    });

    // objekt zu Exportobjekten hinzufügen - wenn nicht schon kopiert
    if (!schonKopiert) {
        exportObjekte.push(exportObjekt);
    }

    return exportObjekte;
};