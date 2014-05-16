function(head, req) {

	// TODO: ist das nötig?
	start({
		"headers": {
			"Accept-Charset": "utf-8",
			"Content-Type": "json; charset=utf-8;"
		}
	});

	var row,
        Objekt,
		rückgabeObjekt = {},
		exportObjekte = [],
		exportObjekt,
		filterkriterien = [],
		filterkriterienObjekt = {"filterkriterien": []},
		felder = [],
		gruppen,
		nur_ds,
		bez_in_zeilen,
		felderObjekt,
		schonKopiert = false,
		objektHinzufügen,
		beziehungssammlungen_aus_synonymen,
        datensammlungen_aus_synonymen,
        _ = require("lists/lib/underscore"),
        _adb = require("lists/lib/artendb_listfunctions");

	// specify that we're providing a JSON response
	provides('json', function() {
		// übergebene Variablen extrahieren
        _.each(req.query, function(value, key) {
            if (key === "fasseTaxonomienZusammen") {
                // true oder false wird als String übergeben > umwandeln
                fasseTaxonomienZusammen = (value === 'true');
            }
            if (key === "filter") {
                filterkriterienObjekt = JSON.parse(value);
                filterkriterien = filterkriterienObjekt.filterkriterien;
                // jetzt strings in Kleinschrift und Nummern in Zahlen verwandeln
                // damit das später nicht dauern wiederholt werden muss
                for (var x=0; x<filterkriterien.length; x++) {
                    // die id darf nicht in Kleinschrift verwandelt werden
                    if (filterkriterien[x].Feldname !== "GUID") {
                        // true wurde offenbar irgendwie umgewandelt
                        // jedenfalls musste man als Kriterium 1 statt true erfassen, um die Resultate zu erhalten
                        // leider kann true oder false nicht wie gewollt von _adb.convertToCorrectType zurückgegeben werden
                        if (filterkriterien[x].Filterwert === "true") {
                            filterkriterien[x].Filterwert = true;
                        } else if (filterkriterien[x].Filterwert === "false") {
                            filterkriterien[x].Filterwert = false;
                        } else {
                            filterkriterien[x].Filterwert = _adb.convertToCorrectType(filterkriterien[x].Filterwert);
                        }
                    }
                }
            }
            if (key === "felder") {
                felderObjekt = JSON.parse(value);
                felder = felderObjekt.felder;
                //send(JSON.stringify(felder)+ "   /   ");
            }
            if (key === "gruppen") {
                gruppen = value.split(",");
            }
            if (key === "nur_ds") {
                // true oder false wird als String übergeben > umwandeln
                nur_ds = (value === 'true');
            }
            if (key === "bez_in_zeilen") {
                // true oder false wird als String übergeben > umwandeln
                bez_in_zeilen = (value === 'true');
            }
        });

		// arrays für sammlungen aus synonymen gründen
		beziehungssammlungen_aus_synonymen = [];
		datensammlungen_aus_synonymen = [];

		while (row = getRow()) {
			Objekt = row.doc;

			// row.key[1] ist 0, wenn es sich um ein Synonym handelt, dessen Informationen geholt werden sollen
			if (row.key[1] === 0) {
				if (Objekt.Datensammlungen && Objekt.Datensammlungen.length > 0) {
					var ds_aus_syn_namen = [];
					if (datensammlungen_aus_synonymen.length > 0) {
                        _.each(datensammlungen_aus_synonymen, function(datensammlung) {
                            if (datensammlung.Name) {
                                ds_aus_syn_namen.push(datensammlung.Name);
                            }
                        });
					}
					var ds_aus_syn_name;
					if (Objekt.Datensammlungen.length > 0) {
                        _.each(Objekt.Datensammlungen, function(datensammlung) {
                            ds_aus_syn_name = datensammlung.Name;
                            if (ds_aus_syn_namen.length === 0 || ds_aus_syn_name.indexOf(ds_aus_syn_namen) === -1) {
                                datensammlungen_aus_synonymen.push(datensammlung);
                                // sicherstellen, dass diese ds nicht nochmals gepuscht wird
                                ds_aus_syn_namen.push(ds_aus_syn_name);
                            }
                        });
					}
				}
				if (Objekt.Beziehungssammlungen && Objekt.Beziehungssammlungen.length > 0) {
					var bs_aus_syn_namen = [];
                    _.each(beziehungssammlungen_aus_synonymen, function(beziehungssammlung) {
                        if (beziehungssammlung.Name) {
                            bs_aus_syn_namen.push(beziehungssammlung.Name);
                        }
                    });
					var bs_aus_syn_name;
                    _.each(Objekt.Beziehungssammlungen, function(beziehungssammlung) {
                        bs_aus_syn_name = beziehungssammlung.Name;
                        if (bs_aus_syn_namen.length === 0 || bs_aus_syn_name.indexOf(bs_aus_syn_namen) === -1) {
                            beziehungssammlungen_aus_synonymen.push(beziehungssammlung);
                            // sicherstellen, dass diese bs nicht nochmals gepuscht wird
                            bs_aus_syn_namen.push(bs_aus_syn_name);
                        }
                    });
				}
				// das war ein Synonym. Hier aufhören
			} else if (row.key[1] === 1) {
				// wir sind jetzt im Originalobjekt

				// sicherstellen, dass DS und BS existieren
				Objekt.Datensammlungen = Objekt.Datensammlungen || [];
				Objekt.Beziehungssammlungen = Objekt.Beziehungssammlungen || [];

				// allfällige DS und BS aus Synonymen anhängen
				// zuerst DS
				// eine Liste der im Objekt enthaltenen DsNamen erstellen
				var dsNamen = [];
                _.each(Objekt.Datensammlungen, function(datensammlung) {
                    if (datensammlung.Name) {
                        dsNamen.push(datensammlung.Name);
                    }
                });
				// nicht enthaltene Datensammlungen ergänzen
				var ds_aus_syn_name2;
                _.each(datensammlungen_aus_synonymen, function(datensammlung) {
                    ds_aus_syn_name2 = datensammlung.Name;
                    if (dsNamen.length === 0 || ds_aus_syn_name2.indexOf(dsNamen) === -1) {
                        Objekt.Datensammlungen.push(datensammlung);
                        // den Namen zu den dsNamen hinzufügen, damit diese DS sicher nicht nochmals gepusht wird
                        // auch nicht, wenn sie von einem anderen Synonym nochmals gebracht wird
                        dsNamen.push(ds_aus_syn_name2);
                    }
                });
				// jetzt BS aus Synonymen anhängen
				// eine Liste der im Objekt enthaltenen BsNamen erstellen
				var bsNamen = [];
                _.each(Objekt.Beziehungssammlungen, function(beziehungssammlung) {
                    if (beziehungssammlung.Name) {
                        bsNamen.push(beziehungssammlung.Name);
                    }
                });
				// nicht enthaltene Beziehungssammlungen ergänzen
				var bs_aus_syn_name2;
                _.each(beziehungssammlungen_aus_synonymen, function(beziehungssammlung) {
                    bs_aus_syn_name2 = beziehungssammlung.Name;
                    if (bsNamen.length === 0 || bs_aus_syn_name2.indexOf(bsNamen) === -1) {
                        Objekt.Beziehungssammlungen.push(beziehungssammlung);
                        // den Namen zu den bsNamen hinzufügen, damit diese BS sicher nicht nochmals gepusht wird,
                        // auch nicht, wenn sie von einem anderen Synonym nochmals gebracht wird
                        bsNamen.push(bs_aus_syn_name2);
                    }
                });

                var obj_erfüllt_kriterien_returnvalue = _adb.prüfeObObjektKriterienErfüllt(Objekt, felder, filterkriterien, fasseTaxonomienZusammen, nur_ds);
                objektHinzufügen = obj_erfüllt_kriterien_returnvalue.objektHinzufügen;
                objektNichtHinzufügen = obj_erfüllt_kriterien_returnvalue.objektNichtHinzufügen;

                if (nur_ds) {
                    // der Benutzer will nur Objekte mit Informationen aus den gewählten Daten- und Beziehungssammlungen erhalten
                    // also müssen wir durch die Felder loopen und schauen, ob der Datensatz anzuzeigende Felder enthält
                    // wenn ja und Feld aus DS/BS und kein Filter gesetzt: objektHinzufügen = true
                    // wenn ein Filter gesetzt wurde und keine Daten enthalten sind, nicht anzeigen
                    var inf_enthalten_return_object = _adb.beurteileObInformationenEnthaltenSind(Objekt, felder, filterkriterien);
                    objektHinzufügen = inf_enthalten_return_object.objektHinzufügen;
                    objektNichtHinzufügen = inf_enthalten_return_object.objektNichtHinzufügen;
                }

				if (objektHinzufügen && !objektNichtHinzufügen) {
					// alle Kriterien sind erfüllt
                    var return_objekt = _adb.erstelleExportobjekt(Objekt, felder, bez_in_zeilen, fasseTaxonomienZusammen, filterkriterien, exportObjekte);
                    schonKopiert = return_objekt.schonKopiert;
                    exportObjekt = return_objekt.exportObjekt;
                    exportObjekte = return_objekt.exportObjekte;

					// Objekt zu Exportobjekten hinzufügen - wenn nicht schon kopiert
					if (!schonKopiert) {
						exportObjekte.push(exportObjekt);
					}
				}
				// arrays für sammlungen aus synonymen zurücksetzen
				beziehungssammlungen_aus_synonymen = [];
				datensammlungen_aus_synonymen = [];
			}
		}
		send(JSON.stringify(exportObjekte));
	});
}