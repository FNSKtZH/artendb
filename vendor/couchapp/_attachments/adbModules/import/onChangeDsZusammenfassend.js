// wenn DsZusammenfassend geändert wird
// DsUrsprungsDs zeigen oder verstecken

/*jslint node: true, browser: true, nomen: true, todo: true, plusplus: true*/
'use strict';

var $ = require('jquery');

module.exports = function () {
    if ($(this).prop('checked')) {
        $("#DsUrsprungsDsDiv").show();
    } else {
        $("#DsUrsprungsDsDiv").hide();
    }
};