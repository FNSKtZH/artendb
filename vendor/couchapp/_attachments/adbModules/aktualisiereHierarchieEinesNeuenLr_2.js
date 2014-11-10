/*jslint node: true, browser: true, nomen: true, todo: true, plusplus: true*/
'use strict';

var $ = require('jquery'),
    _ = require('underscore');

var returnFunction = function (LR, object) {
    var object_array,
        hierarchie     = [],
        parent_object,
        $db            = $.couch.db('artendb'),
        oeffneBaumZuId = require('./jstree/oeffneBaumZuId'),
        erstelleBaum   = require('./jstree/erstelleBaum'),
        initiiereArt   = require('./initiiereArt');

    object_array = _.map(LR.rows, function (row) {
        return row.doc;
    });

    object.Taxonomie = object.Taxonomie || {};
    object.Taxonomie.Eigenschaften = object.Taxonomie.Eigenschaften || {};

    parent_object = _.find(object_array, function (obj) {
        return obj._id === object.Taxonomie.Eigenschaften.Parent.GUID;
    });
    // object.Name setzen
    object.Taxonomie.Name = parent_object.Taxonomie.Name;
    // object.Taxonomie.Eigenschaften.Taxonomie setzen
    object.Taxonomie.Eigenschaften.Taxonomie = parent_object.Taxonomie.Eigenschaften.Taxonomie;
    // als Start sich selben zur Hierarchie hinzufügen
    hierarchie.push(window.adb.erstelleHierarchieobjektAusObjekt(object));
    object.Taxonomie.Eigenschaften.Hierarchie = window.adb.ergänzeParentZuLrHierarchie(object_array, object.Taxonomie.Eigenschaften.Parent.GUID, hierarchie);
    // save ohne open: _rev wurde zuvor übernommen
    $db.saveDoc(object, {
        success: function () {
            $.when(erstelleBaum()).then(function () {
                oeffneBaumZuId(object._id);
                $('#lr_parent_waehlen').modal('hide');
            });
        },
        error: function () {
            $("#meldung_individuell_label").html("Fehler");
            $("#meldung_individuell_text").html("Die Hierarchie des Lebensraums konnte nicht erstellt werden");
            $("#meldung_individuell_schliessen").html("schliessen");
            $('#meldung_individuell').modal();
            initiiereArt(object._id);
        }
    });
};

module.exports = returnFunction;