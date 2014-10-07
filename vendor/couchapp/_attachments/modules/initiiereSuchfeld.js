'use strict';

var returnFunction = function ($) {

	// zuerst mal die benötigten Daten holen
	var $db = $.couch.db("artendb");
	if (window.adb.Gruppe && window.adb.Gruppe === "Lebensräume") {
		if (window.adb.filtere_lr) {
			window.adb.initiiereSuchfeld_2();
		} else {
			var startkey = encodeURIComponent('["' + window.adb.Gruppe + '"]'),
				endkey = encodeURIComponent('["' + window.adb.Gruppe + '",{},{},{}]'),
				url = 'artendb/filtere_lr?startkey=' + startkey + '&endkey=' + endkey;
			$db.view(url, {
				success: function(data) {
					window.adb.filtere_lr = data;
					window.adb.initiiereSuchfeld_2();
				}
			});
		}
	} else if (window.adb.Gruppe) {
		if (window.adb["filtere_art_" + window.adb.Gruppe.toLowerCase()]) {
			window.adb.initiiereSuchfeld_2();
		} else {
			$db.view('artendb/filtere_art?startkey=["' + window.adb.Gruppe + '"]&endkey=["' + window.adb.Gruppe + '",{}]', {
				success: function(data) {
					window.adb["filtere_art_" + window.adb.Gruppe.toLowerCase()] = data;
					window.adb.initiiereSuchfeld_2();
				}
			});
		}
	}
};

module.exports = returnFunction;