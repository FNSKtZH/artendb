// wird aufgerufen durch eine der zwei Schaltflächen: "Vorschau anzeigen", "direkt exportieren"
// direkt: list-funktion aufrufen, welche die Daten direkt herunterlädt

/*jslint node: true, browser: true, nomen: true, todo: true, plusplus: true*/
'use strict';

var _ = require('underscore'),
    $ = require('jquery');

// $ wird benötigt wegen .alert
var returnFunction = function (direkt, fürAlt) {
    // Array von Filterobjekten bilden
    var filterkriterien = [],
        // Objekt bilden, in das die Filterkriterien integriert werden, da ein array schlecht über die url geliefert wird
        filterkriterienObjekt = {},
        filter_objekt,
        gruppen_array = [],
        gruppen = "",
        gruppenliste,
        gewählte_felder = [],
        anz_gewählte_felder_aus_dsbs = 0,
        gewählte_felder_objekt = {},
        anz_ds_gewählt = 0,
        $exportieren_exportieren_hinweis_text,
        html_filterkriterien,
        formular = 'export',
        _alt = '',
        übergebeFilterFürDirektExport        = require('./uebergebeFilterFuerDirektExport'),
        uebergebeFilterFuerExportMitVorschau = require('./uebergebeFilterFuerExportMitVorschau'),
        uebergebeFilterFuerExportFuerAlt     = require('./uebergebeFilterFuerExportFuerAlt'),
        ermittleVergleichsoperator           = require('./ermittleVergleichsoperator');

    if (fürAlt) {
        formular = 'export_alt';
        _alt = '_alt';
    }
    $exportieren_exportieren_hinweis_text = $("#exportieren" + _alt + "_exportieren_hinweis_text");

    // kontrollieren, ob eine Gruppe gewählt wurde
    if (!fürAlt && window.adb.fürExportGewählteGruppen().length === 0) {
        return;
    }

    // Beschäftigung melden
    // nicht nötig für ALT, da sehr schnell
    if (!direkt) {
        $exportieren_exportieren_hinweis_text
            .alert()
            .show()
            .html('Die Daten werden vorbereitet...');
        // zum Hinweistext scrollen
        $('html, body').animate({
            scrollTop: $exportieren_exportieren_hinweis_text.offset().top
        }, 2000);
    }

    // gewählte Gruppen ermitteln
    if (!fürAlt) {
        $(".exportieren_ds_objekte_waehlen_gruppe").each(function () {
            if ($(this).prop('checked')) {
                gruppen_array.push($(this).attr('view'));
                if (gruppen) {
                    gruppen += ",";
                }
                gruppen += $(this).val();
            }
        });
    } else {
        gruppen_array = ['fauna', 'flora'];
        gruppen = 'Fauna, Flora';
    }

    gruppenliste = gruppen.split(",");

    if (!fürAlt) {
        // durch alle Filterfelder loopen
        // aber nur, wenn nicht für ALT exportiert wird
        // wenn ein Feld einen Wert enthält, danach filtern
        $("#exportieren_objekte_waehlen_ds_collapse").find(".export_feld_filtern").each(function () {
            var that = this,
                $this = $(this);
            if (that.type === "checkbox") {
                if (!$this.prop('readonly')) {
                    filter_objekt = {};
                    filter_objekt.DsTyp = $this.attr('dstyp');
                    filter_objekt.DsName = $this.attr('eigenschaft');
                    filter_objekt.Feldname = $this.attr('feld');
                    filter_objekt.Filterwert = $this.prop("checked");
                    filter_objekt.Vergleichsoperator = "=";
                    filterkriterien.push(filter_objekt);
                } else {
                    // übrige checkboxen ignorieren
                }
            } else if (this.value || this.value === 0) {
                // Filterobjekt zurücksetzen
                filter_objekt = {};
                filter_objekt.DsTyp = $this.attr('dstyp');
                filter_objekt.DsName = $this.attr('eigenschaft');
                filter_objekt.Feldname = $this.attr('feld');
                // Filterwert in Kleinschrift verwandeln, damit Gross-/Kleinschrift nicht wesentlich ist (Vergleichswerte werden von filtereFürExport später auch in Kleinschrift verwandelt)
                filter_objekt.Filterwert = ermittleVergleichsoperator(this.value)[1];
                filter_objekt.Vergleichsoperator = ermittleVergleichsoperator(this.value)[0];
                filterkriterien.push(filter_objekt);
            }
        });
    }

    // den array dem objekt zuweisen
    filterkriterienObjekt.filterkriterien = filterkriterien;

    // gewählte Felder ermitteln
    $("#" + formular).find(".exportieren_felder_waehlen_objekt_feld.feld_waehlen").each(function () {
        if ($(this).prop('checked')) {
            // feldObjekt erstellen
            var feldObjekt = {};
            feldObjekt.DsName = "Objekt";
            feldObjekt.Feldname = $(this).attr('feldname');
            gewählte_felder.push(feldObjekt);
        }
    });
    $("#" + formular).find(".exportieren_felder_waehlen_felderliste").find(".feld_waehlen").each(function () {
        if ($(this).prop('checked')) {
            // feldObjekt erstellen
            var feldObjekt = {};
            feldObjekt.DsTyp = $(this).attr('dstyp');
            if (feldObjekt.DsTyp !== "Taxonomie") {
                anz_ds_gewählt++;
            }
            feldObjekt.DsName = $(this).attr('datensammlung');
            feldObjekt.Feldname = $(this).attr('feld');
            gewählte_felder.push(feldObjekt);
            anz_gewählte_felder_aus_dsbs++;
        }
    });
    // den array dem objekt zuweisen
    gewählte_felder_objekt.felder = gewählte_felder;

    // Wenn keine Felder gewählt sind: Melden und aufhören
    if (gewählte_felder_objekt.felder.length === 0) {
        // Beschäftigungsmeldung verstecken
        $exportieren_exportieren_hinweis_text
            .alert()
            .hide();
        $("#exportieren" + _alt + "_exportieren_error_text_text")
            .html("Keine Eigenschaften gewählt<br>Bitte wählen Sie Eigenschaften, die exportiert werden sollen");
        $("#exportieren" + _alt + "_exportieren_error_text")
            .alert()
            .show();
        return;
    }

    // html für filterkriterien aufbauen
    html_filterkriterien = "Gewählte Filterkriterien:<ul>";
    if (fürAlt) html_filterkriterien = "Gewählte Option:<ul>";
    if ($("#exportieren_synonym_infos").prop('checked')) {
        html_filterkriterien += "<li>inklusive Informationen von Synonymen</li>";
    } else {
        html_filterkriterien += "<li>Informationen von Synonymen ignorieren</li>";
    }
    if (filterkriterien.length > 0) {
        _.each(filterkriterien, function (filterkriterium) {
            html_filterkriterien += "<li>";
            html_filterkriterien += "Feld \"" + filterkriterium.Feldname + "\" ";
            if (filterkriterium.Vergleichsoperator !== "kein") {
                html_filterkriterien += filterkriterium.Vergleichsoperator + " \"";
            } else {
                html_filterkriterien += "enthält \"";
            }
            html_filterkriterien += filterkriterium.Filterwert;
            html_filterkriterien += "\"</li>";
        });
        html_filterkriterien += "</ul>";
    } else if (anz_gewählte_felder_aus_dsbs > 0 && !fürAlt) {
        // wenn Filterkriterien erfasst wurde, werden sowieso nur Datensätze angezeigt, in denen Daten vorkommen
        // daher ist die folgende Info nur interesssant, wenn kein Filter gesetzt wurde
        // und natürlich auch nur, wenn Felder aus DS/BS gewählt wurden
        if ($("#exportieren_nur_objekte_mit_eigenschaften").prop('checked')) {
            html_filterkriterien += "<li>Nur Datensätze exportieren, die in den gewählten Eigenschaften- und Beziehungssammlungen Informationen enthalten</li>";
        } else {
            html_filterkriterien += "<li>Auch Datensätze exportieren, die in den gewählten Eigenschaften- und Beziehungssammlungen keine Informationen enthalten</li>";
        }
    }
    $("#exportieren" + _alt + "_exportieren_filterkriterien")
        .html(html_filterkriterien)
        .show();

    // jetzt das filterObjekt übergeben
    if (direkt === "direkt") {
        übergebeFilterFürDirektExport (gruppen, gruppen_array, anz_ds_gewählt, filterkriterienObjekt, gewählte_felder_objekt);
    } if (fürAlt) {
        uebergebeFilterFuerExportFuerAlt(gewählte_felder_objekt);
    } else {
        uebergebeFilterFuerExportMitVorschau(gruppen, gruppen_array, anz_ds_gewählt, filterkriterienObjekt, gewählte_felder_objekt);
    }
};

module.exports = returnFunction;